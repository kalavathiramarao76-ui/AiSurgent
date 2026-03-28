import { motion, useReducedMotion } from 'framer-motion'

const GOOGLE_EASE = [0.25, 0.1, 0.25, 1]

export function Reveal({ children, delay = 0, className, y = 16 }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: GOOGLE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({ children, className, stagger = 0.1, delayStart = 0.1 }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delayStart,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: GOOGLE_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
