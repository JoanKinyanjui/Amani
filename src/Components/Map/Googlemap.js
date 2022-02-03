import React from 'react';
import {GoogleMap, withScriptjs , withGoogleMap} from 'react-google-maps';

function Google() {
  return ( 

  <GoogleMap 
     defaultZoom={10} 
     defaultCenter={{lat:-1.09869, lng:37.02427}} 
  />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Google));

export default function Googlemap(){
    return(
        <div style={{width: '100vw', height:'100vh'}}>
            <WrappedMap  
            googleMapUrl={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<div  style={{height: '100%'}} />}
            containerElement={<div  style={{height: '100%'}} />}
            mapElement={<div  style={{height: '100%'}} />}
            />
        </div>
    )
}
