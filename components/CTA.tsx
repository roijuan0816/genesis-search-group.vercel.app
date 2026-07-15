'use client'

import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-accent to-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Next Leader?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's connect your organization with exceptional talent that drives success.
          </p>
          <button className="px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
