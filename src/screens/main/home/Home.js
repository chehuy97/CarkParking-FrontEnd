import React, { Component } from 'react'
import {  StyleSheet, Button } from 'react-native'
import MapView from 'react-native-maps';
import styles from './Styles'
import { Marker } from 'react-native-maps'
import imageGreen from '../../../assets/images/parkingGreenSign.png';
import imageRed from '../../../assets/images/parkingRedSign.png';


export default class Home extends Component {  
  render() {

    const coordinates = [];

    coordinates.push({
      key: 0,
      location: {
        longitude: 108.206230,
        latitude: 16.047079
      }
    });

    for(let i = 1; i<50; i++) {

      const location = {
        longitude: coordinates[i-1].location.longitude + (Math.random() * (i%2 === 0 ? -0.05 : 0.05)),
        latitude: coordinates[i-1].location.latitude + (Math.random() * (i%2 === 0 ? -0.05 : 0.05)),
      };

      coordinates.push({ key: i, location });

    }

    return (
      <MapView
        renderMarker={renderMarker}
        initialRegion={{
          longitude: 108.206230,
          latitude: 16.047079,
          latitudeDelta: 0.09,
          longitudeDelta: 0.05,
        }}
        style={StyleSheet.absoluteFillObject}>

        { coordinates.map(({ key, location } ) => <Marker key={key} image={setImage(key)} coordinate={location} />) }

      </MapView>
    );
  }
}
function setImage(key){
  if(key%3!==0){
    return imageGreen
  } else{
    return imageRed
  }
}
function renderMarker({ location }) {
  return (
    <Marker
      image={imageRed}
      coordinate={location}
    >
      <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
    </Marker>
  );
}