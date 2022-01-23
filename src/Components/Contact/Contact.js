import React from 'react';
import './Contact.css';

function Contact() {
  return (
  <div className='Contacts'>
     
      <div className='container-contact'>

          <div className='specific-contact' >
              <p><i class="fas fa-phone-alt"></i></p>
              <h6>Call Us At</h6>
              <p>+254 701 435 481</p>
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
              <p>Monday-Sunday(7:00a.m-11:00p.m)</p>

              <p></p>
          </div>

      </div>
      </div>
  )
}

export default Contact;
