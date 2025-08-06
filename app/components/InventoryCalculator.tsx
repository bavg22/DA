import React from 'react'
'use client'

import { useState } from 'react'
import { Plus, Minus, AlertTriangle, TrendingUp } from 'lucide-react'

interface InventoryItem {
  id: string
  name: string
  currentStock: number
  minStock: number
  maxStock: number
  unitCost: number
  avgDailyUsage: number
  supplier: string
  lastOrdered: string
}

const sampleInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'Coffee Beans (Premium Blend)',
    currentStock: 15,
    minStock: 20,
    maxStock: 100,
    unitCost: 12.50,
    avgDailyUsage: 8,
    supplier: 'Local Roasters Co.',
    lastOrdered: '2024-01-15'
  },
  {
    id: '2',
    name: 'Milk (Whole)',
    currentStock: 25,
    minStock: 15,
    maxStock: 50,
    unitCost: 3.20,
    avgDailyUsage: 12,
    supplier: 'Fresh Dairy Farm',
    lastOrdered: '2024-01-18'
  },
  {
    id: '3',
    name: 'Sugar (White)',
    currentStock: 8,
    minStock: 10,
    maxStock: 30,
    unitCost: 2.80,
    avgDailyUsage: 3,
    supplier: 'Sweet Supply Co.',
    lastOrdered: '2024-01-10'
  },
  {
    id: '4',
    name: 'Paper Cups (16oz)',
    currentStock: 200,
    minStock: 100,
    maxStock: 500,
    unitCost: 0.15,
    avgDailyUsage: 45,
    supplier: 'Eco Packaging Ltd.',
    lastOrdered: '2024-01-12'
  }
]

export default function InventoryCalculator() {
  const [inventory, setInventory] = useState<InventoryItem[]>(sampleInventory)
  const [newItem, setNewItem] = useState({
    name: '',
    currentStock: 0,
    minStock: 0,
    maxStock: 0,
    unitCost: 0,
    avgDailyUsage: 0,
    supplier: ''
  })
  const [showAddForm, setShowAddForm] = useState(false)

  const updateStock = (id: string, change: number) => {
    setInventory(prev => prev.map(item => 
      item.id === id 
        ? { ...item, currentStock: Math.max(0, item.currentStock + change) }
        : item
    ))
  }

  const getStockStatus = (item: InventoryItem) => {
    if (item.currentStock <= item.minStock) {
      return { status: 'low', color: 'text-red-600', bgColor: 'bg-red-50' }
    } else if (item.currentStock <= item.minStock * 1.5) {
      return { status: 'medium', color: 'text-yellow-600', bgColor: 'bg-yellow-50' }
    }
    return { status: 'good', color: 'text-green-600', bgColor: 'bg-green-50' }
  }

  const calculateReorderSuggestion = (item: InventoryItem) => {
    const daysUntilEmpty = item.currentStock / item.avgDailyUsage
    const suggestedOrder = Math.max(0, item.maxStock - item.currentStock)
    return { daysUntilEmpty: Math.round(daysUntilEmpty), suggestedOrder }
  }

  const addNewItem = () => {
    if (newItem.name) {
      const item: InventoryItem = {
        ...newItem,
        id: Date.now().toString(),
        lastOrdered: new Date().toISOString().split('T')[0]
      }
      setInventory(prev => [...prev, item])
      setNewItem({
        name: '',
        currentStock: 0,
        minStock: 0,
        maxStock: 0,
        unitCost: 0,
        avgDailyUsage: 0,
        supplier: ''
      })
      setShowAddForm(false)
    }
  }

  const lowStockItems = inventory.filter(item => item.currentStock <= item.minStock)

  return (
    <div className="space-y-6">
      {/* Alerts */}
      {lowStockItems.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="text-red-600" size={20} />
            <h3 className="font-semibold text-red-800">Low Stock Alert</h3>
          </div>
          <p className="text-red-700 mb-3">
            {lowStockItems.length} item(s) need immediate attention:
          </p>
          <div className="space-y-1">
            {lowStockItems.map(item => (
              <p key={item.id} className="text-sm text-red-600">
                • {item.name} ({item.currentStock} remaining)
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Add New Item */}
      <div className="card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Inventory Management</h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>Add Item</span>
          </button>
        </div>

        {showAddForm && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-4">Add New Inventory Item</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Supplier"
                value={newItem.supplier}
                onChange={(e) => setNewItem(prev => ({ ...prev, supplier: e.target.value }))}
                className="input-field"
              />
              <input
                type="number"
                placeholder="Current Stock"
                value={newItem.currentStock || ''}
                onChange={(e) => setNewItem(prev => ({ ...prev, currentStock: parseInt(e.target.value) || 0 }))}
                className="input-field"
              />
              <input
                type="number"
                placeholder="Min Stock Level"
                value={newItem.minStock || ''}
                onChange={(e) => setNewItem(prev => ({ ...prev, minStock: parseInt(e.target.value) || 0 }))}
                className="input-field"
              />
              <input
                type="number"
                placeholder="Max Stock Level"
                value={newItem.maxStock || ''}
                onChange={(e) => setNewItem(prev => ({ ...prev, maxStock: parseInt(e.target.value) || 0 }))}
                className="input-field"
              />
              <input
                type="number"
                step="0.01"
                placeholder="Unit Cost ($)"
                value={newItem.unitCost || ''}
                onChange={(e) => setNewItem(prev => ({ ...prev, unitCost: parseFloat(e.target.value) || 0 }))}
                className="input-field"
              />
              <input
                type="number"
                placeholder="Avg Daily Usage"
                value={newItem.avgDailyUsage || ''}
                onChange={(e) => setNewItem(prev => ({ ...prev, avgDailyUsage: parseInt(e.target.value) || 0 }))}
                className="input-field"
              />
            </div>
            <div className="flex space-x-2 mt-4">
              <button onClick={addNewItem} className="btn-primary">
                Add Item
              </button>
              <button onClick={() => setShowAddForm(false)} className="btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Inventory List */}
        <div className="space-y-4">
          {inventory.map((item) => {
            const stockStatus = getStockStatus(item)
            const reorderInfo = calculateReorderSuggestion(item)
            
            return (
              <div key={item.id} className={`border rounded-lg p-4 ${stockStatus.bgColor}`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">Supplier: {item.supplier}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-sm font-medium ${stockStatus.color} bg-white`}>
                    {stockStatus.status.toUpperCase()}
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Current Stock</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button
                        onClick={() => updateStock(item.id, -1)}
                        className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-semibold text-lg">{item.currentStock}</span>
                      <button
                        onClick={() => updateStock(item.id, 1)}
                        className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Min/Max Stock</p>
                    <p className="font-semibold">{item.minStock} / {item.maxStock}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Unit Cost</p>
                    <p className="font-semibold">${item.unitCost}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Daily Usage</p>
                    <p className="font-semibold">{item.avgDailyUsage}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Days until empty: {reorderInfo.daysUntilEmpty}</span>
                    <span>Last ordered: {item.lastOrdered}</span>
                  </div>
                  
                  {reorderInfo.suggestedOrder > 0 && (
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="text-blue-600" size={16} />
                      <span className="text-sm text-blue-600">
                        Suggest order: {reorderInfo.suggestedOrder} units
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
