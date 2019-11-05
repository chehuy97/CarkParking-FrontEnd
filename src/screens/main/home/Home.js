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
import dimens from '../../../constants/Dimens';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './Styles';
import imageGreen from '../../../assets/images/parkingGreenSign.png';
import imageRed from '../../../assets/images/parkingRedSign.png';
import {CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../constants/Colors';
import axios from 'axios';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 16.06887,
      longitude: 108.216629,
      error: null,
      resultSearch: 'default',
      region: {
        longitude: 108.216629,
        latitude: 16.06887,
        longitudeDelta: 0.03,
        latitudeDelta: 0.03,
      },
      dataOwners: [
        {
          id: 0,
          username: '',
          password: '',
          status: true,
          name: '',
          birthday: '0000-00-00',
          gender: 'Male',
          phone: '',
          image: 'gdausd4r234hkdfdff',
          balance: 0,
          roles: [
            {
              id: 2,
              role_name: '',
            },
          ],
          yard: {
            id: 0,
            acreage: 0,
            point: 12,
            status: true,
            address: '',
            latitude: 0,
            longitude: 0,
            accountId: 0,
          },
        },
      ],
      ownersClick: {
        id: '',
        latitude: '',
        longitude: '',
        name: '',
        address: '',
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
      cardStatus: false,
      searchStatus: false,
    };
  }
  componentDidMount() {
    this.getAccount();
    Geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }),
      error => Alert.alert(error, error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000};
  }
  changeStatus = () => {
    this.setState({cardStatus: false});
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
    this.setState({dataOwners: res.data});
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          onPress={() => this.changeStatus()}
          zoomEnabled={true}
          region={this.state.region}
          style={styles.map}>
          <Marker coordinate={this.state} />
          {/* <Marker
            coordinate={{
              longitude: this.state.dataOwners[0].yard.longitude,
              latitude: this.state.dataOwners[0].yard.latitude,
            }}
          /> */}
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
                    latitude: item.yard.latitude,
                    longitude: item.yard.longitude,
                    name: item.name,
                    address: item.yard.address,
                  },
                  cardStatus: true,
                });
                this.showViewTrue(item.yard.latitude, item.yard.longitude);
              }}
              image={imageGreen}></Marker>
          ))}
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
                  onPress={() => {
                    this.props.navigation.navigate('Search');
                  }}
                />
                <Button
                  title="Booking"
                  buttonStyle={styles.detailButton}
                  onPress={() => {
                    this.props.navigation.navigate('Booking');
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
        {this.state.searchStatus ? (
          <View style={styles.searchView}>
            <View style={styles.viewHistory}>
              <Text style={styles.historyLasttimeText}>Last time</Text>
              <ScrollView>
                <View>
                  <CardItem>
                    <View style={styles.viewImageHistoryCard}>
                      <Image
                        style={styles.imageHistoryCard}
                        source={require('../../../assets/images/clock.png')}
                      />
                    </View>
                    <View style={styles.viewHistoryCardInfo}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            region: {
                              longitude: this.state.point.coordinate.longitude,
                              latitude: this.state.point.coordinate.latitude,
                              longitudeDelta: dimens.delta,
                              latitudeDelta: dimens.delta,
                            },
                            searchStatus: false,
                            cardStatus: false,
                          });
                        }}>
                        <Text style={styles.textNameHistoryCard}>Arthur</Text>
                      </TouchableOpacity>
                      <Text style={styles.textAddressHistoryCard}>
                        112/59 Tran Cao Van
                      </Text>
                    </View>
                  </CardItem>
                </View>
                <View>
                  <CardItem>
                    <View style={styles.viewImageHistoryCard}>
                      <Image
                        style={styles.imageHistoryCard}
                        source={require('../../../assets/images/clock.png')}
                      />
                    </View>
                    <View style={styles.viewHistoryCardInfo}>
                      <TouchableOpacity>
                        <Text style={styles.textNameHistoryCard}>Ben</Text>
                      </TouchableOpacity>
                      <Text style={styles.textAddressHistoryCard}>
                        23 Ly Dao Thanh
                      </Text>
                    </View>
                  </CardItem>
                </View>
                <View>
                  <CardItem>
                    <View style={styles.viewImageHistoryCard}>
                      <Image
                        style={styles.imageHistoryCard}
                        source={require('../../../assets/images/clock.png')}
                      />
                    </View>
                    <View style={styles.viewHistoryCardInfo}>
                      <TouchableOpacity>
                        <Text style={styles.textNameHistoryCard}>Shawn</Text>
                      </TouchableOpacity>
                      <Text style={styles.textAddressHistoryCard}>
                        193 Nguyen Luong Bang
                      </Text>
                    </View>
                  </CardItem>
                </View>
                <View>
                  <CardItem>
                    <View style={styles.viewImageHistoryCard}>
                      <Image
                        style={styles.imageHistoryCard}
                        source={require('../../../assets/images/clock.png')}
                      />
                    </View>
                    <View style={styles.viewHistoryCardInfo}>
                      <TouchableOpacity>
                        <Text style={styles.textNameHistoryCard}>Dung</Text>
                      </TouchableOpacity>
                      <Text style={styles.textAddressHistoryCard}>
                        67 Pham Hung
                      </Text>
                    </View>
                  </CardItem>
                </View>
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
          onSubmitEditing={() => {
            if (this.state.resultSearch === this.state.point.address) {
              this.setState({
                region: {
                  longitude: this.state.point.coordinate.longitude,
                  latitude: this.state.point.coordinate.latitude,
                  longitudeDelta: dimens.delta,
                  latitudeDelta: dimens.delta,
                },
                cardStatus: false,
              });
            } else {
              this.setState({
                region: {
                  longitude: 108.216629,
                  latitude: 16.06887,
                  longitudeDelta: 0.03,
                  latitudeDelta: 0.03,
                },
                cardStatus: false,
              });
            }
            this.setState({searchStatus: false});
          }}
          leftIcon={
            <Icon
              name="car"
              size={18}
              color={Colors.appColor}
              style={{marginRight: 10}}
            />
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
