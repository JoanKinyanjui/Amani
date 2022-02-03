import { Button } from 'bootstrap';
import React from 'react';
import Googlemap from './Googlemap';
import './Map.css';

function Map() {
  return (
      <div className='Map'>
<form  className='form'>
    <input 
    style={{padding:'5px 33px', borderRadius:'5px', border:'none'}}
    className='form-control'
    placeholder='email address'
    type='text'
    />
    <br/>
    <textarea placeholder='message' style={{ margin:'2rem',borderRadius:'5px', border:'none'}} className='form-control' cols='40' rows='9'>

    </textarea>
    <br />
    <button style={{padding:'5px 23px', borderRadius:'5px', border:'none'}}>Submit</button>
</form>

{/* <Googlemap /> */}

      </div>
      
  )
}

export default Map;

