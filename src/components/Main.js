import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context';
import Logo from '../assets/logo.png'

import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import MenuIcon from './MenuIcon'
import SideMenu from './SideMenu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/Main.scss'

const Main = () => {

    const controls = useAnimation();
    const [ ref, inView ] = useInView();

    const { socialInfo } = useContext(Context);

    useEffect(() => {
      if ( inView ) {
        controls.start('enter')
      }
      else {
        controls.start('exit')
      }
    }, [ controls, inView ])
    
    // const transition = {  duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    const contentVariants = {
        initial: { scale: 1, opacity: 0 },
        enter: { 
            scale: 1, 
            opacity: 1, 
            staggerChildren: .2,
            delayChildren: .3,
        },
        exit: { 
            scale: 0, 
            opacity: 0, 
        }
    };

    const linksVariants = {
        initial: { 
            opacity: 0, 
            transition: { 
                delay: 1, 
                duration: 1.5
            } },

        enter: { 
            opacity: 1, 
            transition: { 
                delay: 1.3, 
                duration: 1.5,
            } },
    };

    const link = socialInfo.map( ( item, index ) => (
        <motion.li 
            className='main-link' 
            key={index}
            variants={linksVariants}
            initial="initial"
            animate='enter'
        >
            <a href='/#'>
                <span className='main-link-title'> 
                    { item.title }
                </span>
                <FontAwesomeIcon className='main-link-icon' icon={item.icon} />
            </a>
        </motion.li>
    ))

  return (
    <div className='main'>

        <header>
            <img src={Logo} alt="logo" />
            <MenuIcon/>
        </header>

        <SideMenu/>

        <div className='main-content'>
            
            <motion.div 
                className='content'
                ref={ref}
                variants={contentVariants}
                initial="initial"
                animate={controls}
            >
                <h3> WELCOME TO GLINT </h3>
                <h1> 
                    We are a creative group <br/>
                    of people who design <br/>
                    influential brands and <br/>
                    digital experiences. 
                </h1>
                <div className='content-btns'>
                    <button> start a project </button>
                    <button> more about us </button>
                </div>
            </motion.div>

            <ul className='main-links'>
                { link }
            </ul>
            
        </div>
    </div>
  )
}

export default Main
