import React, { Component } from "react";

import MapGl, { Marker } from "react-map-gl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "../../store/ducks/modal";

import "./styles.css";

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -21.975923,
      longitude: -46.780686,
      zoom: 15
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = async e => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.props;

    await showModal({ latitude, longitude });
  };

  render() {
    const { viewport } = this.state;
    const { users } = this.props;
    return (
      <MapGl
        {...viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {users.data.map(user => (
          <Marker
            latitude={user.cordinates.latitude}
            longitude={user.cordinates.longitude}
            key={user.id}
          >
            <img
              className="avatar"
              alt={`${user.name} Avatar`}
              src={user.avatar}
            />
          </Marker>
        ))}
      </MapGl>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
