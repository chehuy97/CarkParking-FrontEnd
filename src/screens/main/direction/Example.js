import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const coordinates = [
  {
    latitude: 16.073994,
    longitude: 108.208426,
  },
  {
    latitude: 16.053341,
    longitude: 108.217687,
  },
];
const GOOGLE_MAPS_APIKEY = 'AIzaSyA96bPJjAD9l3PCnhaaAI3h67vRldVVl2g';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        longitude: 108.216629,
        latitude: 16.06887,
        longitudeDelta: 0.03,
        latitudeDelta: 0.03,
      },
    };
  }
  render() {
    return (
      <MapView initialRegion={this.state.region} style={{flex: 1}}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="red"
        />
      </MapView>
    );
  }
}
