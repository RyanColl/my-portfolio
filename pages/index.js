import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div 
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    className='home-page'>
        
    </motion.div>
  )
}
