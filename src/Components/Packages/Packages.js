import React from 'react';
import './Packages.css';

function Packages() {
  return (
      <>
    <h3>WASH PACKAGES</h3>

    <div className='Packages'>
    <div className='card'>
        <h6>Carpets</h6>
       
        <p>30min</p>
        <hr />
        <div><h5>ksh 300/ksh600</h5></div>
        <hr/>
        <p>medium/large</p>
      
      </div>

      <div className='card'>
        <h6>Motor Bikes</h6>
      
        <p>30min</p>
        <hr />
        <div><h5>ksh 300</h5></div>
        <hr/>
        <ul>
          <li>Exterior Hand Wash</li>
          <li>Towel Hand Dy</li>
          <li>Wheel Shine</li>
          <li>Widows In and out</li>
        </ul>
      
      </div>
     
      <div className='card'>
        <h6>Regular Small Bikes</h6>
      
        <p>30min</p>
        <hr />
        <div><h5>ksh 300</h5></div>
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
       
        <p>30min</p>
        <hr />
        <div><h5>ksh 300</h5></div>
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
        <div><h5>ksh 300</h5></div>
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
