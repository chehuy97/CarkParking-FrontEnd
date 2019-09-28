import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps';
import styles from './Styles'
import { Marker } from 'react-native-maps'


export default class Home extends Component {  
  // constructor(props){
  //   super(props)
  //   this.state = {
  //       region: {
  //         latitude: 37.78825,
  //         longitude: -122.4324,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //       },
  //     }
  //   }
  // onRegionChange(region) {
  //   this.setState({ region });
  // }

  render() {
    return (
    <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
         latitude: 16.06778,
         longitude: 108.22083,
         latitudeDelta: 0.1,
         longitudeDelta: 0.1,
       }}
     >
     </MapView>
      </View>
    );
  }
}