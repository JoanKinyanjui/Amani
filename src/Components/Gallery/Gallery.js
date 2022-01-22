import React from 'react';
import './Gallery.css'

function Gallery() {
  return(
    <div className='Gallery'>
     <h3>Our Gallery</h3>
    <div className='Gallery1'>
     
      <div className='Gallery-img'>
        <img  className='Gallery-img' src='/Images/amani1.jpg'/>
      </div>
      <div className='Gallery-img'>
        <img  className='Gallery-img' src='/Images/amani2.jpg'/>
      </div>
      <div className='Gallery-img'>
        <img className='Gallery-img'  src='/Images/amani3.jpg'/>
      </div>
      <div className='Gallery-img'>
        <img className='Gallery-img'  src='/Images/amani4.jpg'/>
      </div>
      
        
    </div>
    </div>
  )
}

export default Gallery;
