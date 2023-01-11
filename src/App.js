import React, { useContext } from 'react'
import { Context } from './context/Context';

import About from './components/About';
import Main from './components/Main';
import Job from './components/Job';
import Projects from './components/Projects';

import { AnimatePresence } from "framer-motion"

import './styles/App.scss';

function App() {

  // const { onMenuToggle } = useContext(Context); 

  return (
    <div 
      className="App"
      // onClick={onMenuToggle}
    >
      <AnimatePresence>

        <div>
          <Main />
          <About />
          <Job />
          <Projects />
        </div>
      
      </AnimatePresence>
    </div>
  );
}

export default App;
