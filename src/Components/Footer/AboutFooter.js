import React from 'react';
import '../Footer/Footer';

function AboutFooter(props) {
  return (
    <div className={props.className} >
   <h4>{props.About}</h4>
   <p>{props.title}</p>
   <p><i class="fas fa-2x fa-car"></i></p>
    </div>)
}

export default AboutFooter;
