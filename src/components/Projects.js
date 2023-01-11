import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../context/Context';

import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import Green from '../assets/portfolio/grow-green.jpg';
import Guitarist from '../assets/portfolio/guitarist.jpg';

import '../styles/Projects.scss';

const Projects = () => {

  const { imagesInfo } = useContext(Context);

  const image = imagesInfo.map( ( i, index ) => (
    <a 
      href={i.href} 
      key={index}
      className="projects-portfolio-gallery-link"
      data-sub-html={`<h3> ${ i.title } </h3> <p> ${ i.text } </p>`}
      data-src={i.src}
    >
      <img
        className="projects-portfolio-gallery-img"
        // data-lg-size={i.size}
        width='49%'
        height={i.height - '1px'}
        src={i.src} 
        alt='#' 
        // alt={i.alt} 
      />
    </a>
  ))

  //lazy
  // const image = imagesInfo.map( ( i, index ) => (
  //   <LazyLoadImage
  //     width='50%' 
  //     height={400}
  //     key={index}
  //     src={i.src}
  //     alt={i.alt}
  //   />
  // ))

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <section className='projects'>

      <div className='projects-header'>
        <h3> RECENT WORKS </h3>
        <h1> We love what we do, check out <br/> some of our latest works </h1>
        <div className='projects-header-bottom-line'></div>
      </div>

      <div className='projects-portfolio'>
        <LightGallery
          className="projects-portfolio-gallery"
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          mode="lg-fade"
        >
          { image }
        </LightGallery>

        {/* lazy */}
        {/* { image } */}
      </div>
      
    </section>
  )
}

export default Projects
