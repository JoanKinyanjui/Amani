import React from 'react';
import './Main.css';

function MainView(props){
  
  return (
      <div className={props.className}>

        <div  className='wordings'>
    
          <h2>AMANI CARWASH</h2>
          <h6>{props.title2}</h6>

     
        </div>
        <div className='wordings1'>
    
    <h2>AMANI CARWASH</h2>
    <h6>{props.title3}</h6>


  </div>
  
      </div>
  )
}

export default MainView;
