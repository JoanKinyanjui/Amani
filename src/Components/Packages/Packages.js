import React from 'react';
import './Packages.css';

function Packages() {
  return (
      <>
      <div className='who-is'>
    <h3 >WASH PACKAGES</h3>
    </div>

    <div className='Packages'>
    <div className='card'>
        <h6>Carpets</h6>
       
        <p>1-2 days</p>
        <hr />
        <div><h5>ksh 200-ksh1500</h5></div>
        <hr/>
        <p>Depends on the size</p>
      
      </div>

      <div className='card'>
        <h6>Motor Bikes</h6>
      
        <p>20min</p>
        <hr />
        <div><h5>ksh 100</h5></div>
        <hr/>
        <ul>
          <li>Exterior Hand Wash</li>
          <li>Towel Hand Dy</li>
          <li>Wheel Shine</li>
        </ul>
      
      </div>
     
      <div className='card'>
        <h6>Regular Small Bikes</h6>
      
        <p>40min</p>
        <hr />
        <div><h5>ksh 200</h5></div>
        <hr/>
        <ul>
          <li>Exterior Hand Wash</li>
          <li>Towel Hand Dy</li>
          <li>Wheel Shine</li>
          <li>Widows In and out</li>
        </ul>
      
      </div>
      <div className='card'>
        <h6>Medium Sized Cars</h6>
       
        <p>40min</p>
        <hr />
        <div><h5>ksh 200</h5></div>
        <hr/>
        <ul>
          <li>Exterior Hand Wash</li>
          <li>Towel Hand Dy</li>
          <li>Wheel Shine</li>
          <li>Widows In and out</li>
        </ul>
      
      </div>
      <div className='card'>
        <h6>Trucks</h6>
        <p>30min</p>
        <hr />
        <div><h5>ksh 300-1000</h5></div>
        <hr/>
        <ul>
          <li>Exterior Hand Wash</li>
          <li>Towel Hand Dy</li>
          <li>Wheel Shine</li>
          <li>Widows In and out</li>
        </ul>
      
      </div>

      {/* <div className='card'>Regular Small Cars</div>
      <div className='card'>Medium Sized Cars</div>
      <div className='card'>Lorry</div> */}
    </div>
      </>
  )
}

export default Packages;
