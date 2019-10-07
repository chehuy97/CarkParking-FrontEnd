import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import dimens from '../../../constants/Dimens';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './Styles';
import imageGreen from '../../../assets/images/parkingGreenSign.png';
import imageRed from '../../../assets/images/parkingRedSign.png';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 16.06887,
      longitude: 108.216629,
      error: null,
      region: {
        longitude: 108.216629,
        latitude: 16.06887,
        longitudeDelta: dimens.delta,
        latitudeDelta: dimens.delta,
      },
      point: {
        key: 0,
        coordinate: {
          longitude: 108.208523,
          latitude: 16.074037,
        },
        name: 'Arthur',
        address: 'Abc',
      },
    };
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }),
      error => Alert.alert(error, error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000};
  }
  changeRegion = resultSearch => {
    if (resultSearch === this.state.point.address) {
      this.setState({
        region: {
          longitude: this.state.point.coordinate.longitude,
          latitude: this.state.point.coordinate.latitude,
          longitudeDelta: dimens.delta,
          latitudeDelta: dimens.delta,
        },
      });
    } else {
      this.setState({
        region: {
          longitude: this.state.longitude,
          latitude: this.state.latitude,
          longitudeDelta: dimens.delta,
          latitudeDelta: dimens.delta,
        },
      });
    }
    return this.state.region;
  };
  render() {
    const resultSearch = this.props.navigation.getParam('value', 'Default');
    return (
      <View style={styles.container}>
        <MapView
          //onRegionChangeComplete={() => this.changeRegion(resultSearch)}
          zoomEnabled={true}
          region={this.state.region}
          style={StyleSheet.absoluteFillObject}>
          <Marker coordinate={this.state} />
          <Marker
            coordinate={this.state.point.coordinate}
            title={this.state.point.name}
            description={this.state.point.address}
            image={imageGreen}></Marker>
        </MapView>
        <Text style={{position: 'absolute', top: 100, left: 50}}>
          {this.state.resultSearch}
        </Text>
        <TouchableOpacity style={styles.buttonShowGPS}>
          <Image
            style={styles.buttonImage}
            source={require('../../../assets/images/target.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGo}
          onPress={() => {
            this.props.navigation.navigate('Search');
          }}>
          <Image
            style={styles.buttonImage}
            source={require('../../../assets/images/arrows.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
