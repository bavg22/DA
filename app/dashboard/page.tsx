import React from 'react'
'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { Upload, FileText, BarChart3, Package, Download } from 'lucide-react'
import FileUpload from '../components/FileUpload'
import FinancialChart from '../components/FinancialChart'
import InventoryCalculator from '../components/InventoryCalculator'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('upload')

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const tabs = [
    { id: 'upload', name: 'File Upload', icon: Upload },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'downloads', name: 'Downloads', icon: Download },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Manage your business tools and analytics.</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon size={20} />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'upload' && <FileUpload />}
          {activeTab === 'analytics' && <FinancialChart />}
          {activeTab === 'inventory' && <InventoryCalculator />}
          {activeTab === 'downloads' && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Download Center</h2>
              <p className="text-gray-600">Your processed files and reports will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
