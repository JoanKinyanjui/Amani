import { Button } from 'bootstrap';
import React from 'react';
import './Extra.css';

function Extra() {
  return(
      <>
   
      <div className='Extra'>

          
            <div className='theory'>
            <h3>AMANI CARWASH</h3>
                <br/>
                <i style={{color:' grey'}}>-We value your car-</i>
                <br/>
                <br />
                
                  <p>We operate the Carwash aong Thika Road. Our goal is to provide our
                       customers with the friendliest, most convenient 
                       hand car wash experience possible. We use the most 
                       modern and up-to-date water reclamation modules as
                        a part of our car wash systems. Our products are 
                        eco-friendly.
                  </p>
                  <ul className='theory-list'>
                      <li> ~ we use professional equipment and have a fully trained staff</li>
                    <li> ~ we make sure our customers are completely satisfied with their service</li>
                      <li> ~ we are a licensed and fully insured company</li>
                   
                  </ul>

            </div>
            <div className='practical'>
                <img src='/Images/amani8.jpg'/>
                <img src='/Images/amani13.jpg'/>
                <img src='/Images/amani6.jpg'/>

            </div>
      </div>
      </>
  )
}

export default Extra;
