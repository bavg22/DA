import React from 'react'
'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'

const sampleData = [
  { month: 'Jan', revenue: 12000, expenses: 8000, profit: 4000 },
  { month: 'Feb', revenue: 15000, expenses: 9500, profit: 5500 },
  { month: 'Mar', revenue: 18000, expenses: 11000, profit: 7000 },
  { month: 'Apr', revenue: 16000, expenses: 10500, profit: 5500 },
  { month: 'May', revenue: 20000, expenses: 12000, profit: 8000 },
  { month: 'Jun', revenue: 22000, expenses: 13000, profit: 9000 },
]

const expenseCategories = [
  { category: 'Food & Beverages', amount: 8500, percentage: 45 },
  { category: 'Labor', amount: 6000, percentage: 32 },
  { category: 'Rent', amount: 2500, percentage: 13 },
  { category: 'Utilities', amount: 1200, percentage: 6 },
  { category: 'Other', amount: 800, percentage: 4 },
]

export default function FinancialChart() {
  const [chartType, setChartType] = useState<'line' | 'bar'>('line')

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Financial Overview</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setChartType('line')}
              className={`px-3 py-1 rounded ${
                chartType === 'line' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Line Chart
            </button>
            <button
              onClick={() => setChartType('bar')}
              className={`px-3 py-1 rounded ${
                chartType === 'bar' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Bar Chart
            </button>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, '']} /><Legend />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            ) : (
              <BarChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, '']} />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" />
                <Bar dataKey="expenses" fill="#ef4444" />
                <Bar dataKey="profit" fill="#10b981" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Revenue</span>
              <span className="font-semibold text-green-600">$103,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Expenses</span>
              <span className="font-semibold text-red-600">$64,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Net Profit</span>
              <span className="font-semibold text-blue-600">$39,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Profit Margin</span>
              <span className="font-semibold">37.9%</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
          <div className="space-y-3">
            {expenseCategories.map((category) => (
              <div key={category.category}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">{category.category}</span>
                  <span className="text-sm font-medium">${category.amount}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
