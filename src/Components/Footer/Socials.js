import React from 'react';
import './Footer.css';

function Socials() {
  return (
    <div className='Socials'>
        <hr />
   <ul>
     <li><a><i class="fab fa-twitter"></i></a></li>
     <li><a><i class="fab fa-instagram"></i></a></li>
     <li><a><i class="fab fa-facebook-f"></i></a></li>
   </ul><br />
   <div className='hr'>
 &copy;{new Date().getFullYear()}|CarWash|Terms of Service|Privacy
            </div>

    </div>
    )
}

export default Socials;
