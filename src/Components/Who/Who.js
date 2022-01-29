import React from 'react';
import './Who.css';

function Who() {
  return(
      <div className='Who'>
      <div className='who-is'>
          <h2>Who Is AMANI Carwash?</h2>
          <i>Car wash & detailling service</i>
      </div>
      <div className='container'>
        <div className='col-1'>
        
             <img className='img-1' src='/Images/amani6.jpg'/>
               
            
            <p><i class="fa fa-3x fa-car"></i><br /><br /><br />
                Amani CarWash is an eco-friendly, hand car wash and detailing service based in Juja(Sewage). 
                Our company was founded back in 2020 by a an enterprenuer Mr Kimando Njogu.
                  Our goal is to provide our customers with the friendliest, 
                 most convenient hand car wash experience possible. We use the most modern and up-to-date water reclamation 
                 modules as a part of our car wash systems. Our products are all biodegradable and eco-friendly.
</p>

        </div>

        <div className='col'>
            <h5><i class="fas fa-globe"></i> The Best Carwash</h5>
            <ul>
                <li>We offer multiple services at a great value</li><br />
                <li>Biodegradable and eco-friendly products</li><br />
                <li>Trained and skilled car wash crew members</li><br />
            </ul>
        </div>

        <div className=' col'>
        <h5><i class="fab fa-accessible-icon"></i> Contacting Us</h5>
            <ul>
                <li>We are very open and easy to reach company</li><br />
                <li>Our email is checked hourly during the day</li><br />
                <li>Book an appointment online under 3 minutes</li><br />
            </ul>
        </div>

      </div>
      </div>
  )
}

export default Who;
