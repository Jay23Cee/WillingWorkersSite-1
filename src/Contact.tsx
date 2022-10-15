import React from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  
};

const center = {
  lat: 34.03987169154813,
  lng:  -118.34399681590634
};



const onLoad = (marker: any) => {
  console.log('marker: ', marker)
}

function Contact() {



  return (

    <div className="Gmap">

   
    <LoadScript
      googleMapsApiKey='AIzaSyAIQ76AHNTX5-2ZwTZj7D4G1FLPEjez6oE'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14    }
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerF
      onLoad={onLoad}
      position={center}
    />
        <></>
      </GoogleMap>
    </LoadScript>

    </div>
  )
}

export default React.memo(Contact)