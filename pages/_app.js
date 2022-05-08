
import '../styles.scss'
import Store from '../context/Store';
import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import BuildingDependencies from '../components/Loading/BuildingDependencies'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/app.scss';
import './styles/cube.scss';
import './styles/NavBar.scss';
import './styles/Tooltips.scss';
import './styles/settings.scss'
import LoadingPage from '../components/Loading/LoadingPAge';

export const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}


function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp
