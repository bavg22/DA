import React from 'react'
'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    business: 'Café Luna',
    location: 'Austin, TX',
    rating: 5,
    text: 'BusinessBoost transformed how we manage our finances. The PDF to CSV feature saves us hours every week, and the inventory suggestions have reduced our waste by 30%.',
    avatar: '/avatars/maria.jpg'
  },
  {
    name: 'James Chen',
    business: 'Dragon Noodle House',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'The financial analytics helped us identify our most profitable dishes and optimize our menu. Our profit margins increased by 15% in just 3 months.',
    avatar: '/avatars/james.jpg'
  },
  {
    name: 'Sarah Johnson',
    business: 'Morning Brew Coffee',
    location: 'Portland, OR',
    rating: 5,
    text: 'As a small coffee shop owner, I needed simple tools that actually work. BusinessBoost is perfect - easy to use and saves me so much time on bookkeeping.',
    avatar: '/avatars/sarah.jpg'
  }
]

export default function Testimonials() {
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
            Loved by Small Business Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of restaurant and coffee shop owners who are growing their business with our tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.business} • {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
