
import '../styles.scss'
import Store from '../context/Store'
import NavBar from '../components/NavBar'
import BuildingDependencies from '../components/BuildingDependencies'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <AnimatePresence exitBeforeEnter={true}>
        {!state.loading ? (
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <NavBar onClick={() => {}} />
            <div className="App">
              <AnimatePresence exitBeforeEnter={true}>
                <Component {...pageProps} />
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <BuildingDependencies />
        )}
      </AnimatePresence>
    </Store>
  );
}

export default MyApp
