import React from 'react';
import '../Footer/Footer';

function ServicesFooter(props) {
  return (
    <div className={props.className}>
        <h4>{props.Service}</h4>
        <ul>
            <li> {props.title1} </li>
            <li>  {props.title2}  </li>
            <li>  {props.title3}  </li>
            <li>  {props.title4} </li>
        </ul>

    </div>
  )
}

export default ServicesFooter;
