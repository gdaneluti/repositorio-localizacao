import React, { Component } from 'react';
import MapGl, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  render() {
    const { viewport } = this.state;
    return (
      <MapGl
        {...viewport}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}
