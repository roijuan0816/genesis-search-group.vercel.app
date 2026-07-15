'use client'

import { motion } from 'framer-motion'

const Hero = () => {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-primary via-primary to-gray-900">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Connecting Exceptional Talent
            <br />
            <span className="text-accent">with Exceptional Companies</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            We specialize in executive search, leadership recruitment, and professional hiring services tailored to your organization's unique needs.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary">
              Hire Talent
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
