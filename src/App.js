
import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import "./App.css"


const libraries = ['places'];
const mapContainerStyle = {
  width: '300px',
  height: '250px',
};
const center = {
  lat: 36.89866042417698, // default latitude
  lng: 10.190918488617198, // default longitude
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCsEnvlFJ1xYN-MK0KDnDcJ3abrU5L5Ekw',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <>
      <div className='App'>
        <h1>Google Maps APIS Integration</h1>x
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </>
  );
};

export default App;
