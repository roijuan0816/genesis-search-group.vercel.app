'use client'

import { motion } from 'framer-motion'

const Trust = () => {
  const features = [
    'Executive Search',
    'Confidential Hiring',
    'Fast Turnaround',
    'Professional Recruiters',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Trusted by Companies Worldwide
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature}
              variants={itemVariants}
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <span className="text-2xl text-accent">✔</span>
              <span className="text-lg font-semibold">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Trust
