import React from 'react'
'use client'

import Link from 'next/link'
import { ArrowRight, FileText, BarChart3, Package } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Digital Tools for
              <span className="text-primary-600 block">Small Restaurants</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Transform your business with powerful tools to convert receipts to CSV, 
              analyze finances, manage inventory, and boost productivity. Built specifically 
              for restaurants and coffee shops.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/signup" className="btn-primary text-lg px-8 py-3 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/demo" className="btn-secondary text-lg px-8 py-3 flex items-center justify-center">
                Watch Demo
              </Link>
            </div>

            <div className="flex items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Files Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <FileText className="text-primary-600" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">PDF to CSV</h3>
                    <p className="text-sm text-gray-600">Convert receipts instantly</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <BarChart3 className="text-green-600" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Financial Analytics</h3>
                    <p className="text-sm text-gray-600">Track expenses & profits</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                  <Package className="text-purple-600" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Inventory Management</h3>
                    <p className="text-sm text-gray-600">Smart reorder suggestions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
