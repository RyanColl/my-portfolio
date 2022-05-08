import React from 'react'
import {Context} from '../../context/Store'
import { AnimatePresence, motion } from 'framer-motion';
import BuildingDependencies from './BuildingDependencies';
import { pageVariants } from '../../pages/_app';
import NavBar from '../NavBar/NavBar';

function LoadingPage({ children }) {
  const { state, dispatch } = React.useContext(Context);
  return (
    <AnimatePresence exitBeforeEnter={true}>
      {!state.loading ? (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <div className="App">
            <NavBar onClick={() => {}} />
            <AnimatePresence exitBeforeEnter={true}>{children}</AnimatePresence>
          </div>
        </motion.div>
      ) : (
        <BuildingDependencies />
      )}
    </AnimatePresence>
  );
}

export default LoadingPage