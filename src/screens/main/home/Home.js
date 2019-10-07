import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Alert,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import dimens from '../../../constants/Dimens';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
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
      status: true,
    };
    this.refreshScreen = this.refreshScreen.bind(this);
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
  searchPlace = resultSearch => {
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
      this.setState({status: false});
    }
    return this.state.region;
  };
  refreshScreen() {
    this.setState({
      region: {
        longitude: this.state.longitude,
        latitude: this.state.latitude,
        longitudeDelta: dimens.delta,
        latitudeDelta: dimens.delta,
      },
    });
  }
  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({status: false});
    } else {
      this.setState({status: true});
      this.showViewTrue();
    }
  };
  showViewTrue = () => {
    this.setState({
      region: {
        longitude: this.state.point.coordinate.longitude,
        latitude: this.state.point.coordinate.latitude,
        longitudeDelta: dimens.delta,
        latitudeDelta: dimens.delta,
      },
    });
  };
  // showDetailParkingLot = () => {
  //   <View style={styles.parkingDetail}></View>;
  //   alert('hihi');
  // };
  render() {
    const resultSearch = this.props.navigation.getParam('value', 'Default');
    return (
      <View style={styles.container}>
        <MapView
          onPress={() => this.searchPlace(resultSearch)}
          zoomEnabled={true}
          region={this.state.region}
          style={styles.map}>
          <Marker coordinate={this.state} />
          <Marker
            coordinate={this.state.point.coordinate}
            title={this.state.point.name}
            description={this.state.point.address}
            onPress={() => this.ShowHideTextComponentView()}
            image={imageGreen}></Marker>
        </MapView>
        {this.state.status ? (
          <View>
            <View style={styles.parkingDetail}>
              <Text style={styles.detailName}>Arthur</Text>
              <Text>Abc</Text>
            </View>
            <TouchableOpacity style={styles.buttonShowGPSCard}>
              <Image
                style={styles.buttonImage}
                source={require('../../../assets/images/target.png')}
                onPress={() => {}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGoCard}
              onPress={() => {
                this.props.navigation.navigate('Search');
              }}>
              <Image
                style={styles.buttonImage}
                source={require('../../../assets/images/arrows.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={styles.buttonShowGPS}>
              <Image
                style={styles.buttonImage}
                source={require('../../../assets/images/target.png')}
                onPress={() => {}}
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
        )}
      </View>
    );
  }
}
