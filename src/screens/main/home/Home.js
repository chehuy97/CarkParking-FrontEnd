import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Alert,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import MapViewDirections from 'react-native-maps-directions';
import dimens from '../../../constants/Dimens';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './Styles';
import imageParking from '../../../assets/images/imageParking.png';
import {CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../constants/Colors';
import axios from 'axios';
import Modal from 'react-native-modal';

const GOOGLE_MAPS_APIKEY = 'AIzaSyD6mOq5rTWHZoVXRcN1csfDJyZNGSHTW04';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 16.053344,
      longitude: 108.217691,
      fakeCurrentPosition: {
        latitude: 16.053344,
        longitude: 108.217691,
      },
      error: null,
      resultSearch: 'default',
      searchInfo: [],
      region: {
        longitude: 108.216629,
        latitude: 16.06887,
        longitudeDelta: 0.03,
        latitudeDelta: 0.03,
      },
      dataOwners: [],
      ownersClick: {
        id: 0,
        coordinate: {
          latitude: 16.074309,
          longitude: 108.21422,
        },
        name: '',
        address: '',
        yardId: 0,
      },
      cardStatus: false,
      searchStatus: false,
      lenghtOwner: 0,
      statusDirection: false,
      nearestAddress: {},
      clickShowNearestAddress: false,
    };
  }
  componentDidMount = async () => {
    await this.getAccount();
    await Geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }),
      error => Alert.alert(error, error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000};
  };
  changeStatus = () => {
    this.setState({cardStatus: false});
  };
  changeStatusDirection = () => {
    this.setState({
      statusDirection: true,
      cardStatus: false,
      region: {
        longitude: 108.216629,
        latitude: 16.06887,
        longitudeDelta: 0.03,
        latitudeDelta: 0.03,
      },
    });
  };
  showDirection = coordinate => {
    return (
      <MapViewDirections
        origin={this.state.fakeCurrentPosition}
        destination={coordinate}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="#708090"
      />
    );
  };
  showViewTrue = (latitude, longitude) => {
    this.setState({
      region: {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: dimens.delta,
        longitudeDelta: dimens.delta,
      },
    });
  };
  getAccount = async () => {
    var res = await axios.get(
      `http://192.168.21.90:3000/api/customers/owneraddress`,
    );
    this.setState({dataOwners: res.data, lenghtOwner: res.data.length});
  };
  searchAddress = async () => {
    axios
      .get(
        'http://192.168.21.90:3000/api/customers/owneraddress/search/' +
          this.state.resultSearch,
      )
      .then(async res => {
        this.setState({
          searchInfo: res.data,
          cardStatus: !this.state.cardStatus,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  findNearestAddress = async () => {
    var res = await axios.get(
      'http://192.168.21.90:3000/api/customers/owneraddress/nearest/' +
        this.state.fakeCurrentPosition.latitude +
        '/' +
        this.state.fakeCurrentPosition.longitude,
    );
    this.setState({
      region: {
        latitude: res.data.yard.latitude,
        longitude: res.data.yard.longitude,
        latitudeDelta: dimens.delta,
        longitudeDelta: dimens.delta,
      },
      clickShowNearestAddress: false,
      cardStatus: true,
      statusDirection: false,
      ownersClick: {
        id: res.data.id,
        coordinate: {
          latitude: res.data.yard.latitude,
          longitude: res.data.yard.longitude,
        },
        name: res.data.name,
        address: res.data.yard.address,
        yardId: res.data.yard.id,
      },
    });
    console.log(this.state.nearestAddress);
  };
  changeClickShowNearestAddress = () => {
    this.setState({
      clickShowNearestAddress: !this.state.clickShowNearestAddress,
      cardStatus: false,
      region: {
        longitude: 108.216629,
        latitude: 16.06887,
        longitudeDelta: 0.03,
        latitudeDelta: 0.03,
      },
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          onPress={() => this.changeStatus()}
          zoomEnabled={true}
          region={this.state.region}
          style={styles.map}>
          <Marker coordinate={this.state.fakeCurrentPosition} />
          {this.state.dataOwners.map(item => (
            <Marker
              coordinate={{
                longitude: item.yard.longitude,
                latitude: item.yard.latitude,
              }}
              title={item.name}
              description={item.yard.address}
              onPress={() => {
                this.setState({
                  ownersClick: {
                    id: item.id,
                    coordinate: {
                      latitude: item.yard.latitude,
                      longitude: item.yard.longitude,
                    },
                    name: item.name,
                    address: item.yard.address,
                    yardId: item.yard.id,
                  },
                  cardStatus: true,
                  statusDirection: false,
                });
                this.showViewTrue(item.yard.latitude, item.yard.longitude);
              }}
              image={imageParking}></Marker>
          ))}
          {this.state.statusDirection
            ? this.showDirection(this.state.ownersClick.coordinate)
            : null}
        </MapView>
        {this.state.cardStatus ? (
          <View>
            <View style={styles.detailView}>
              <Text style={styles.detailName}>
                {this.state.ownersClick.name}
              </Text>
              <CardItem style={styles.detailAddressCard}>
                <Text style={styles.detailAddress}>
                  {this.state.ownersClick.address}
                </Text>
                <Icon
                  name="car"
                  size={15}
                  color={Colors.loginButton}
                  style={styles.detailTimeIcon}
                />
                <Text style={styles.detailTime}>24min</Text>
              </CardItem>
              <CardItem>
                <Button
                  title="Direct"
                  buttonStyle={styles.detailButton}
                  onPress={() => this.changeStatusDirection()}
                />
                <Button
                  title="Booking"
                  buttonStyle={styles.detailButton}
                  onPress={() => {
                    this.props.navigation.navigate('Booking', {
                      yardId: this.state.ownersClick.yardId,
                    });
                  }}
                />
              </CardItem>
            </View>
            <TouchableOpacity
              style={styles.buttonShowGPSCard}
              onPress={() => {
                this.setState({
                  region: {
                    longitude: this.state.longitude,
                    latitude: this.state.latitude,
                    longitudeDelta: dimens.delta,
                    latitudeDelta: dimens.delta,
                  },
                });
              }}>
              <Image
                style={styles.buttonImage}
                source={require('../../../assets/images/target.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGoCard}
              onPress={() => {
                this.changeClickShowNearestAddress();
              }}>
              <Image
                style={styles.buttonImage}
                source={require('../../../assets/images/arrows.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              style={styles.buttonShowGPS}
              onPress={() => {
                this.setState({
                  region: {
                    longitude: this.state.longitude,
                    latitude: this.state.latitude,
                    longitudeDelta: dimens.delta,
                    latitudeDelta: dimens.delta,
                  },
                });
              }}>
              <Image
                style={styles.buttonImage}
                source={require('../../../assets/images/target.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGo}
              onPress={() => this.changeClickShowNearestAddress()}>
              <Image
                style={styles.buttonImage}
                source={require('../../../assets/images/arrows.png')}
              />
            </TouchableOpacity>
          </View>
        )}
        <Modal isVisible={this.state.clickShowNearestAddress}>
          <View style={styles.dialogConfirm}>
            <View style={styles.viewContentConfirm}>
              <Text style={styles.textConfirm}>
                do you want to find a nearest address ?
              </Text>
            </View>
            <View style={styles.ViewConfirm}>
              <TouchableOpacity
                style={styles.confirmYesNo}
                onPress={() => this.changeClickShowNearestAddress()}>
                <Text style={styles.textConfirm}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmYesNo}
                onPress={() => this.findNearestAddress()}>
                <Text style={styles.textConfirm}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {this.state.searchStatus ? (
          <View style={styles.searchView}>
            <View style={styles.viewHistory}>
              <Text style={styles.historyLasttimeText}>Result</Text>
              <ScrollView>
                {this.state.searchInfo.map(item => (
                  <View style={styles.viewAddressCard}>
                    <View style={styles.viewImageAddressCard}>
                      <Image
                        style={styles.imageAddressCard}
                        source={require('../../../assets/images/imageParking.png')}
                      />
                    </View>
                    <View style={styles.viewAddressCardInfo}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            region: {
                              longitude: item.yard.longitude,
                              latitude: item.yard.latitude,
                              longitudeDelta: dimens.delta,
                              latitudeDelta: dimens.delta,
                            },
                            searchStatus: false,
                          });
                        }}>
                        <Text style={styles.textNameAddressCard}>
                          {item.yard.address}
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.textAddressAddressCard}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        ) : null}
        <Input
          placeholder="search location"
          underlineColorAndroid={Colors.colorWhite}
          containerStyle={styles.searchInput}
          onChangeText={value => this.setState({resultSearch: value})}
          onFocus={() => {
            this.setState({searchStatus: true});
          }}
          onSubmitEditing={() => this.searchAddress()}
          leftIcon={
            <TouchableOpacity
              onPress={() => {
                this.setState({searchStatus: false});
              }}>
              <Icon
                name="chevron-left"
                size={18}
                color={Colors.appColor}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          }
          rightIcon={
            <Icon
              name="search"
              size={18}
              color={Colors.appColor}
              style={{marginRight: 15}}
            />
          }
        />
      </View>
    );
  }
}
