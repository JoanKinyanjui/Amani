import React ,{useRef,useEffect} from 'react';
import './Main.css';
import {TweenMax} from 'gsap';

function MainView(props){
  // let logoItem =useRef(null);
  // useEffect(()=>{
  //     TweenMax.from(
  //         logoItem,{
  //             duration: 8,
  //             fontSize: '0px',
  //             opacity: 0,
  //             ease: 'sine',
  //             color:'transparent'
  //         }
  //     )
  // })
  //ref={el=>{logoItem=el}}
  
  return (
      <div className={props.className}>

        <div   className='wordings'>
    
          <h2 >AMANI CARWASH</h2>
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
