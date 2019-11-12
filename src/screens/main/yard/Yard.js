import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  Button,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import YardInfoCard from '../../../components/booking_card/YardInfoCard';
import styles from './Styles';
import colors from '../../../constants/Colors';
import {CardItem} from 'native-base';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import Axios from 'axios';

export default class Yard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carNumber: '',
      clickedCarNumber: false,
      timeCome: 0,
      timeLeave: 0,
      timeLeaveLine: 0,
      slot: 0,
      slotKey: 0,
      clickedSlot: false,
      clickedTimeCome: false,
      clickedTimeLeave: false,
      addressData: {},
      lenghtSlot: 0,
      AccountCars: {},
      lengthCar: 0,
      timeStart: 0,
      timeOpen: 0,
      timeClose: 0,
    };
  }
  changeClickCarNumber = () => {
    this.setState({
      clickedCarNumber: !this.state.clickedCarNumber,
    });
  };
  chooseCarNumber = carNumber => {
    this.setState({
      carNumber: carNumber,
      clickedCarNumber: !this.state.clickedCarNumber,
    });
  };
  changeClickTimeCome = () => {
    this.setState({
      clickedTimeCome: !this.state.clickedTimeCome,
    });
  };
  changeClickTimeLeave = () => {
    this.setState({
      clickedTimeLeave: !this.state.clickedTimeLeave,
    });
  };
  chooseTimeCome = timeCome => {
    this.setState({
      timeCome: timeCome,
      clickedTimeCome: !this.state.clickedTimeCome,
    });
  };
  chooseTimeLeave = timeLeave => {
    this.setState({
      timeLeave: timeLeave,
      clickedTimeLeave: !this.state.clickedTimeLeave,
    });
  };
  changeClickSlot = () => {
    this.setState({
      clickedSlot: !this.state.clickedSlot,
    });
  };
  chooseSlot = (slot, slotkey) => {
    this.setState({
      slot: slot,
      slotKey: slotkey,
      clickedSlot: !this.state.clickedSlot,
    });
  };
  getAddressOwner = async () => {
    var id = await AsyncStorage.getItem('accountId');
    Axios.get('http://192.168.21.90:3000/api/owners/' + id + '/yards/')
      .then(async res => {
        this.setState({
          addressData: res.data,
          lenghtSlot: res.data.slots.length,
          timeOpen: res.data.time_open,
          timeClose: res.data.time_close,
        });
        console.log(this.state.addressData);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getAccountCars = async () => {
    var id = await AsyncStorage.getItem('accountId');
    Axios.get('http://192.168.21.90:3000/api/customers/cars/' + id)
      .then(async res => {
        this.setState({
          carNumber: res.data[0].car_number,
          AccountCars: res.data,
          lengthCar: res.data.length,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  setTimeStart = () => {
    var currentTime = new Date().getHours();
    if (
      currentTime < this.state.timeOpen ||
      currentTime > this.state.timeClose
    ) {
      this.setState({timeStart: this.state.addressData.time_open});
    } else {
      this.setState({timeStart: currentTime});
    }
  };
  componentDidMount = async () => {
    await this.getAddressOwner();
    await this.getAccountCars();
    await this.setTimeStart();
  };
  render() {
    const keySlot = [];
    for (i = 0; i < this.state.lenghtSlot; i++) {
      keySlot.push({key: i});
    }
    const keyCar = [];
    for (i = 0; i < this.state.lengthCar; i++) {
      keyCar.push({key: i});
    }
    const timeCome = [];
    const timeBooked = [];
    const timeLeave = [];
    for (i = this.state.timeCome + 1; i <= this.state.timeLeaveLine; i++) {
      timeLeave.push({key: i});
    }

    const keyTime = [];
    for (
      i = this.state.timeStart;
      i <= this.state.addressData.time_close;
      i++
    ) {
      keyTime.push({key: i});
    }
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            source={{uri: this.state.addressData.image_yard}}
            style={styles.imageAddress}
          />
          <View>
            <YardInfoCard
              iconName="location"
              name="Address:"
              value={this.state.addressData.address}
            />
            <YardInfoCard
              iconName="clock"
              name="Open time:"
              value={
                this.state.addressData.time_open +
                ':00 - ' +
                this.state.addressData.time_close +
                ':00'
              }
            />
            <YardInfoCard
              iconName="tag"
              name="Slot:"
              value={this.state.lenghtSlot + ' available'}
            />
          </View>
        </View>
        <View style={styles.viewBookedShedule}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={{marginHorizontal: 10, fontWeight: 'bold'}}>
                Hours
              </Text>
              {keyTime.map(item => (
                <View style={styles.timeNumber}>
                  <Text style={{fontWeight: 'bold'}}>{item.key}</Text>
                </View>
              ))}
            </View>
            {keySlot.map(slot => (
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginRight: 28,
                    fontWeight: 'bold',
                  }}>
                  Slot {slot.key + 1}:
                </Text>
                {keyTime.map(time => {
                  if (
                    this.state.addressData.slots[slot.key].times[time.key] ===
                    '0'
                  ) {
                    timeCome.push({
                      keySlot: slot.key,
                      keyTime: time.key,
                    });
                    return <View style={styles.lineTimeNone} />;
                  } else if (
                    this.state.addressData.slots[slot.key].times[time.key] ===
                    '1'
                  ) {
                    timeBooked.push({
                      keySlot: slot.key,
                      keyTime: time.key,
                    });

                    return <View style={styles.lineTimeBooked} />;
                  } else if (
                    this.state.addressData.slots[slot.key].times[time.key] ===
                    '*'
                  ) {
                    timeBooked.push({
                      keySlot: slot.key,
                      keyTime: time.key,
                    });
                  }
                })}
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.viewBookTime}></View>
        <View style={styles.viewButton}>
          <View style={styles.viewPrice}>
            <Text style={styles.textPrice}>Price:</Text>
            <Text style={styles.textPriceValue}>
              {(this.state.timeLeave - this.state.timeCome) *
                this.state.addressData.price}
            </Text>
            <Text style={styles.textPrice}>VND</Text>
          </View>
          <TouchableOpacity style={styles.viewBtnBooking}>
            <View>
              <Text style={styles.textBooking}>BOOKING</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
