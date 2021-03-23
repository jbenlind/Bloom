import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};


const VenueMap = ({lat, lng}) => {
    const center = {
      lat: lat,
      lng: lng
    };
    console.log(lat, lng)
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAhUv7D1k_1HGN2tm-Im677gbBTetI64lo"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
         <Marker position={{lat: lat, lng: lng}}/>
          <></>
        </GoogleMap>
      </LoadScript>
    )
}

export default VenueMap;
