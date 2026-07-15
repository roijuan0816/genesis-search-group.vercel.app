'use client'

import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: 'Executive Search',
      description: 'We identify and recruit top-level executives with the strategic expertise and leadership qualities your organization requires.',
      icon: '🏢',
    },
    {
      title: 'Leadership Recruitment',
      description: 'Our team specializes in finding exceptional leaders who drive innovation and growth within your company.',
      icon: '👥',
    },
    {
      title: 'Professional Hiring',
      description: 'From specialized roles to diverse teams, we match qualified professionals with the right opportunities.',
      icon: '💼',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="p-8 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-accent">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
