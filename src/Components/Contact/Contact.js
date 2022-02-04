import React from 'react';
import './Contact.css';
import Contactus from './Contactus';

function Contact() {
  return (
      <>
  <div className='Contacts'>
     
      <div className='container-contact'>

          <div className='specific-contact' >
              <p><i class="fas fa-phone-alt"></i></p>
              <h6>Call Us At</h6>
              <p>0706131329</p>
          </div>
 <hr />

          <div className='specific-contact' >
              <p><i class="fas fa-map-marker-alt"></i></p>
              <h6>Our Location</h6>
              <p>Juja Sewage along Thika Road</p>
          </div>
<hr />
          <div className='specific-contact' >
              <p><i class="fas fa-clock"></i></p>
              <h6>Working Hours</h6>
              <p>Monday-Sunday(6:30a.m-10:00p.m)</p>

              <p></p>
          </div>

      </div>
      </div>
      </>
  )
}

export default Contact;
