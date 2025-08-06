import React from 'react'
'use client'

import { FileText, BarChart3, Package, Calculator, TrendingUp, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: FileText,
    title: 'PDF to CSV Conversion',
    description: 'Upload receipts, bills, and invoices. Our AI extracts data and converts to CSV format instantly.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: BarChart3,
    title: 'Financial Analytics',
    description: 'Track expenses, revenue, and profit margins with beautiful charts and insights.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Package,
    title: 'Inventory Calculator',
    description: 'Monitor stock levels and get smart reorder suggestions based on sales patterns.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Calculator,
    title: 'Cost Analysis',
    description: 'Calculate food costs, portion sizes, and pricing strategies to maximize profits.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: TrendingUp,
    title: 'Sales Forecasting',
    description: 'Predict future sales and plan inventory based on historical data and trends.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your data is encrypted and secure. We never share your business information.',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Grow Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed specifically for small restaurants and coffee shops. 
            Streamline operations and make data-driven decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={feature.color} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
