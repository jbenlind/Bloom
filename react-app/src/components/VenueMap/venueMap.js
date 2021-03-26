import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const VenueMap = ({lat, lng}) => {

  const center = {
    lat: lat,
    lng: lng
  };

  const [selected, setSelected] = useState(false)

    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAhUv7D1k_1HGN2tm-Im677gbBTetI64lo"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onClick={(e) => setSelected(false)}
        >
         <Marker onClick={(e) => setSelected(true)} position={{lat: lat, lng: lng}}/>
         {selected &&
          <InfoWindow onCloseClick={(e) => setSelected(false)} position={{lat: lat, lng: lng}}>
            <a className="map-link" href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}>Click for Directions</a>
          </InfoWindow>}
          <></>
        </GoogleMap>
      </LoadScript>
    )
}

export default VenueMap;
