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

export default class Booking extends Component {
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
      addressData: {time_open: 0, time_close: 0},
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
    //var id = this.props.navigation.getParam('yardId', 'default value');
    Axios.get('http://192.168.21.90:3000/api/customers/owneraddress/' + 1)
      .then(async res => {
        this.setState({
          addressData: res.data,
          lenghtSlot: res.data.slots.length,
          timeOpen: res.data.time_open,
          timeClose: res.data.time_close,
        });
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
  setTimeStart = async () => {
    const currentTime = await new Date().getHours();
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
        <View style={styles.viewBookTime}>
          <CardItem style={styles.cardBooking}>
            <Text style={styles.bookingText}>CAR NUMBER:</Text>
            <TouchableOpacity
              style={styles.pickerCarNumber}
              onPress={() => this.changeClickCarNumber()}>
              <View style={styles.textCarNumber}>
                <Text>{this.state.carNumber}</Text>
              </View>
              <View style={styles.downIcon}>
                <Icon
                  name="chevron-down"
                  size={23}
                  color={colors.loginButton}
                  type="evilicon"
                />
              </View>
            </TouchableOpacity>
            <Modal isVisible={this.state.clickedCarNumber}>
              <View style={styles.dialogCarNumber}>
                <CardItem style={styles.dialogCardCarNumber}>
                  <Text style={{fontWeight: 'bold'}}>CAR NUMBER</Text>
                </CardItem>
                <ScrollView>
                  {keyCar.map(({key}) => (
                    <TouchableOpacity
                      onPress={() =>
                        this.chooseCarNumber(
                          this.state.AccountCars[key].car_number,
                        )
                      }>
                      <CardItem style={styles.dialogCardCarNumber}>
                        <Text style={{flex: 5}}>
                          {this.state.AccountCars[key].car_number}
                        </Text>
                        <Icon
                          style={{flex: 1}}
                          name="arrow-right"
                          size={30}
                          color={colors.loginButton}
                          type="evilicon"
                        />
                      </CardItem>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity onPress={() => this.changeClickCarNumber()}>
                  <CardItem style={styles.dialogCardCarNumber}>
                    <Text>Close</Text>
                  </CardItem>
                </TouchableOpacity>
              </View>
            </Modal>
          </CardItem>
          <CardItem style={styles.cardBooking}>
            <Text style={styles.bookingText}>SLOT:</Text>
            <TouchableOpacity
              style={styles.pickerTime}
              onPress={() => this.changeClickSlot()}>
              <View style={styles.textTime}>
                <Text>{this.state.slotKey + 1}</Text>
              </View>
              <View style={styles.downIcon}>
                <Icon
                  name="chevron-down"
                  size={23}
                  color="gray"
                  type="evilicon"
                />
              </View>
            </TouchableOpacity>
            <Modal isVisible={this.state.clickedSlot}>
              <View style={styles.dialogTime}>
                <CardItem style={styles.dialogCardCarNumber}>
                  <Text style={{fontWeight: 'bold'}}>SLOT</Text>
                </CardItem>
                <ScrollView style={{height: 180, backgroundColor: 'white'}}>
                  {keySlot.map(({key}) => (
                    <TouchableOpacity
                      onPress={() =>
                        this.chooseSlot(this.state.addressData.slots[key], key)
                      }>
                      <CardItem style={styles.dialogCardCarNumber}>
                        <Text style={{flex: 5}}>Slot {key + 1}</Text>
                        <Icon
                          style={{flex: 1}}
                          name="arrow-right"
                          size={30}
                          color={colors.loginButton}
                          type="evilicon"
                        />
                      </CardItem>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity onPress={() => this.changeClickSlot()}>
                  <CardItem style={styles.dialogCardCarNumber}>
                    <Text>Close</Text>
                  </CardItem>
                </TouchableOpacity>
              </View>
            </Modal>
            <Text style={styles.bookingText}>COME:</Text>
            <TouchableOpacity
              style={styles.pickerTime}
              onPress={() => {
                this.changeClickTimeCome();
              }}>
              <View style={styles.textTime}>
                <Text>{this.state.timeCome}:00</Text>
              </View>
              <View style={styles.downIcon}>
                <Icon
                  name="chevron-down"
                  size={23}
                  color="gray"
                  type="evilicon"
                />
              </View>
            </TouchableOpacity>
            <Modal isVisible={this.state.clickedTimeCome}>
              <View style={styles.dialogTime}>
                <CardItem style={styles.dialogCardCarNumber}>
                  <Text style={{fontWeight: 'bold'}}>Time Come</Text>
                </CardItem>
                <ScrollView style={{height: 180, backgroundColor: 'white'}}>
                  {timeCome.map(({keySlot, keyTime}) => {
                    if (keySlot === this.state.slotKey) {
                      return (
                        <TouchableOpacity
                          onPress={async () => {
                            await this.chooseTimeCome(keyTime);
                            var time = await this.state.timeCome;
                            for (i = 0; i < timeBooked.length; i++) {
                              if (
                                time < timeBooked[i].keyTime &&
                                timeBooked[i].keySlot == this.state.slotKey
                              ) {
                                this.setState({
                                  timeLeaveLine: timeBooked[i].keyTime,
                                });
                                console.log(this.state.timeLeaveLine);
                                break;
                              }
                            }
                          }}>
                          <CardItem style={styles.dialogCardCarNumber}>
                            <Text style={{flex: 5}}>{keyTime}:00</Text>
                            <Icon
                              style={{flex: 1}}
                              name="arrow-right"
                              size={30}
                              color={colors.loginButton}
                              type="evilicon"
                            />
                          </CardItem>
                        </TouchableOpacity>
                      );
                    }
                  })}
                </ScrollView>
                <TouchableOpacity onPress={() => this.changeClickTimeCome()}>
                  <CardItem style={styles.dialogCardCarNumber}>
                    <Text>Close</Text>
                  </CardItem>
                </TouchableOpacity>
              </View>
            </Modal>
            <Text style={styles.bookingText}>LEAVE:</Text>
            <TouchableOpacity
              style={styles.pickerTime}
              onPress={() => this.changeClickTimeLeave()}>
              <View style={styles.textTime}>
                <Text>{this.state.timeLeave}:00</Text>
              </View>
              <View style={styles.downIcon}>
                <Icon
                  name="chevron-down"
                  size={23}
                  color="gray"
                  type="evilicon"
                />
              </View>
            </TouchableOpacity>
          </CardItem>
          <Modal isVisible={this.state.clickedTimeLeave}>
            <View style={styles.dialogTime}>
              <CardItem style={styles.dialogCardCarNumber}>
                <Text style={{fontWeight: 'bold'}}>Time Leave</Text>
              </CardItem>
              <ScrollView style={{height: 180, backgroundColor: 'white'}}>
                {timeLeave.map(({key}) => (
                  <TouchableOpacity onPress={() => this.chooseTimeLeave(key)}>
                    <CardItem style={styles.dialogCardCarNumber}>
                      <Text style={{flex: 5}}>{key}:00</Text>
                      <Icon
                        style={{flex: 1}}
                        name="arrow-right"
                        size={30}
                        color={colors.loginButton}
                        type="evilicon"
                      />
                    </CardItem>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TouchableOpacity onPress={() => this.changeClickTimeLeave()}>
                <CardItem style={styles.dialogCardCarNumber}>
                  <Text>Close</Text>
                </CardItem>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
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
