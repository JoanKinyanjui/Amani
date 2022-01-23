import React from 'react';
import '../Footer/Footer';

function CompanyFooter(props) {
  return  (
      <div className= {props.className}>
          <h4>{props.Company}</h4>
<ul>
    <a> <li> {props.title1} </li></a>
    <a> <li> {props.title2}</li></a>
    <a> <li> {props.title3}</li></a>
    <a> <li> {props.title4}</li></a>
</ul>
      </div>
  )
}

export default CompanyFooter;
