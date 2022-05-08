import { motion } from 'framer-motion'
import LoadingPage from '../components/Loading/LoadingPAge'
import { pageVariants } from './_app'

export default function Index() {
  return (
    <IndexComponent />
  )
}

const IndexComponent = () => {
  return (
    <LoadingPage>
      <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className='home-page'>
          home page
      </motion.div>
    </LoadingPage>
  )
}
