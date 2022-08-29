import "mapbox-gl/dist/mapbox-gl.css";
import React, {useCallback} from "react";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import Map, {Marker} from 'react-map-gl';
import GeocoderControl from "./geocoderControl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFja2llZ2hvc3QiLCJhIjoiY2w3OXVpemhwMDNyczNwdGtlZ2dhcnh0ZyJ9.Ra3LrWhzfySg84TnhhI2jA";

export default function GenMap() {
  const [viewState, setViewState] = React.useState({
      latitude: -37.840935,
      longitude: 144.946457,
      zoom: 14
  });
  const onMove = React.useCallback(({viewState}) => {
    const newCenter = [viewState.longitude, viewState.latitude];
    setViewState(newCenter);
  }, [])
  const promptAlert = {
    width: '25px',
    height: '25px',
    background:'yellow'
}
  return (
    <div style={{ height: "100vh" }}>
      <Map
      {...viewState}
      mapStyle="mapbox://styles/fuwak0o0/cl2vqyhwn000n14tgci6txwby"
      onMove = {onMove}
      mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={144.946457} latitude={-37.840935} anchor="top" style={promptAlert}></Marker>
        <GeocoderControl mapboxAccessToken={MAPBOX_TOKEN} position="top-left" language="english"/>
      </Map>
    </div>
  );
};
