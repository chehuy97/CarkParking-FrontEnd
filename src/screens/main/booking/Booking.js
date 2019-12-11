import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
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
      clickedTimeCome: false,
      clickedTimeLeave: false,
      clickedBooking: false,
      clickedDate: false,
      addressData: {time_open: 0, time_close: 0},
      AccountCars: {},
      lengthCar: 0,
      timeStart: 0,
      timeOpen: 0,
      timeClose: 0,
      accountId: 0,
      yardId: 0,
      slotData: [],
      date: '1997-10-09',
      dateShow: [],
    };
  }
  // _onRefresh = () => {
  //   this.setState({refreshing: true});
  //   this.getAddressOwner().then(() => this.setState({refreshing: false}));
  // };
  changeClickedBooking = () => {
    this.setState({
      clickedBooking: !this.state.clickedBooking,
    });
  };
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
  changeClickDate = () => {
    this.setState({
      clickedDate: !this.state.clickedDate,
    });
  };
  chooseDate = date => {
    this.setState({
      date: date,
      clickedDate: !this.state.clickedDate,
    });
    //this.defaultComeLeave(date);
  };
  getAddressOwner = async day => {
    Axios.get(
      'http://192.168.21.90:3000/api/customers/owneraddress/' +
        this.state.yardId +
        '/' +
        day,
    )
      .then(async res => {
        var open = 0,
          close = 0;
        this.setState({
          addressData: res.data,
        });
        open = res.data.time_open;
        close = res.data.time_close;
        if (this.state.timeOpen === 0 || open < this.state.timeOpen) {
          this.setState({timeOpen: open});
        }
        if (this.state.timeClose === 0 || close > this.state.timeClose) {
          this.setState({timeClose: close});
        }
        this.state.slotData.push({day: day, slotTime: res.data.times});
        //this.setTimeStart();
        //this.defaultComeLeave(this.state.date);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getAccountCars = async () => {
    Axios.get(
      'http://192.168.21.90:3000/api/customers/cars/' + this.state.accountId,
    )
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
  // setTimeStart = () => {
  //   var currentTime = new Date().getHours();
  //   if (
  //     currentTime < this.state.timeOpen ||
  //     currentTime > this.state.timeClose
  //   ) {
  //     this.setState({timeStart: this.state.addressData.time_open});
  //   } else {
  //     this.setState({timeStart: currentTime});
  //   }
  // };
  bookShedule = async () => {
    if (this.state.timeCome === this.state.timeLeave) {
      await this.changeClickedBooking();
      await alert('You must choose time come and leave');
    } else {
      const res = await Axios.post(
        'http://192.168.21.90:3000/api/customers/address/booking/',
        {
          day: this.state.date,
          time_come: this.state.timeCome,
          time_leave: this.state.timeLeave,
          price:
            (this.state.timeLeave - this.state.timeCome) *
            this.state.addressData.price,
          car_number: this.state.carNumber,
          accountId: this.state.accountId,
          yardId: this.state.yardId,
        },
      );
      await this.changeClickedBooking();
      alert('Sucessfully!Your position in this yard is' + res.data);
      await this.props.navigation.navigate('Home');
    }
  };
  // defaultComeLeave = day => {
  //   for (i = 0; i < this.state.slotData.length; i++) {
  //     if (this.state.slotData[i].day === day) {
  //       // for (i = this.state.timeOpen; i < 24; i++) {
  //       //   if (this.state.slotData[i].slotTime[j] === '0') {
  //       //     this.setState({timeCome: j});
  //       //     break;
  //       //   }
  //       // }
  //       console.log('hihi');
  //       break;
  //     }
  //   }
  //   for (j = this.state.timeCome; j < 24; j++) {
  //     if (this.state.slotData[j] === '1' || this.state.slotData[j] === '*') {
  //       this.setState({timeLeave: j});
  //       break;
  //     }
  //   }
  // };
  setDay = async () => {
    var date = await new Date();
    this.setState({
      date:
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    });
    for (i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      var day =
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      var dayShow = date.getDate() + '-' + (date.getMonth() + 1);
      //this.state.date.push({day: day});
      this.state.dateShow.push({day: dayShow});
      await this.getAddressOwner(day);
    }
  };
  componentDidMount = async () => {
    var yardId = await this.props.navigation.getParam(
      'yardId',
      'default value',
    );
    var accountId = await AsyncStorage.getItem('accountId');
    await this.setState({accountId: accountId, yardId: yardId});
    await this.setDay();
    await this.getAccountCars();
    //alert(this.state.slotData[0].day);
  };
  render() {
    //alert(this.state.slotData[0].day);
    const keySlot = [];
    for (i = 0; i < this.state.lenghtSlot; i++) {
      keySlot.push({key: i});
      f;
    }
    const keyCar = [];
    for (i = 0; i < this.state.lengthCar; i++) {
      keyCar.push({key: i});
    }
    const timeCome = [];
    const timeBooked = [];
    const timeLeave = [];
    for (i = this.state.timeCome + 1; i <= this.state.timeLeave; i++) {
      timeLeave.push({key: i});
    }

    const keyTime = [];
    for (i = this.state.timeOpen; i <= this.state.timeClose; i++) {
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
                this.state.timeOpen + ':00 - ' + this.state.timeClose + ':00'
              }
            />
            <YardInfoCard
              iconName="tag"
              name="Slot:"
              value={this.state.addressData.slot + ' available'}
            />
          </View>
        </View>
        <View style={styles.viewBookedShedule}>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.textBookedShedule}>Times:</Text>
            {this.state.dateShow.map(item => (
              <Text style={styles.textBookedShedule}>{item.day}</Text>
            ))}
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              {keyTime.map(item => (
                <View style={styles.timeNumber}>
                  <Text style={{fontWeight: 'bold'}}>{item.key}</Text>
                </View>
              ))}
            </View>
            {this.state.slotData.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    paddingLeft: 20,
                  }}>
                  {keyTime.map(time => {
                    if (item.slotTime[time.key] === '0') {
                      timeCome.push({
                        day: item.day,
                        keyTime: time.key,
                      });
                      return <View style={styles.lineTimeNoBook} />;
                    } else if (item.slotTime[time.key] === '1') {
                      timeBooked.push({
                        day: item.day,
                        keyTime: time.key,
                      });
                      return <View style={styles.lineTimeBooked} />;
                    } else if (
                      item.slotTime[time.key] === '*' &&
                      time.key !== this.state.timeClose
                    ) {
                      return <View style={styles.lineTimeNone} />;
                    } else if (
                      item.slotTime[time.key] === '*' &&
                      time.key === this.state.timeClose
                    ) {
                      timeBooked.push({
                        day: item.day,
                        keyTime: time.key,
                      });
                    }
                  })}
                </View>
              );
            })}
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
            <Text style={styles.bookingText}>DATE:</Text>
            <TouchableOpacity
              style={styles.pickerCarNumber}
              onPress={() => this.changeClickDate()}>
              <View style={styles.textCarNumber}>
                <Text>{this.state.date}</Text>
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
            <Modal isVisible={this.state.clickedDate}>
              <View style={styles.dialogCarNumber}>
                <CardItem style={styles.dialogCardCarNumber}>
                  <Text style={{fontWeight: 'bold'}}>Date</Text>
                </CardItem>
                <ScrollView>
                  {this.state.slotData.map(item => (
                    <TouchableOpacity onPress={() => this.chooseDate(item.day)}>
                      <CardItem style={styles.dialogCardCarNumber}>
                        <Text style={{flex: 5}}>{item.day}</Text>
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
                <TouchableOpacity onPress={() => this.changeClickDate()}>
                  <CardItem style={styles.dialogCardCarNumber}>
                    <Text>Close</Text>
                  </CardItem>
                </TouchableOpacity>
              </View>
            </Modal>
          </CardItem>
          <CardItem style={styles.cardBooking}>
            <Text style={styles.bookingText}>COME AT:</Text>
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
                  {timeCome.map(({day, keyTime}) => {
                    if (day === this.state.date) {
                      return (
                        <TouchableOpacity
                          onPress={async () => {
                            await this.chooseTimeCome(keyTime);
                            var time = await this.state.timeCome;
                            for (i = 0; i < timeBooked.length; i++) {
                              if (
                                time < timeBooked[i].keyTime &&
                                timeBooked[i].day === this.state.date
                              ) {
                                this.setState({
                                  timeLeave: timeBooked[i].keyTime,
                                });
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
            <Text style={styles.bookingText}>LEAVE AT:</Text>
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
            <Text style={styles.textPrice}>VND</Text>
            <Text style={styles.textPriceValue}>
              {(this.state.timeLeave - this.state.timeCome) *
                this.state.addressData.price}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.viewBtnBooking}
            onPress={() => this.changeClickedBooking()}>
            <View>
              <Text style={styles.textBooking}>BOOKING</Text>
            </View>
          </TouchableOpacity>
          <Modal isVisible={this.state.clickedBooking}>
            <View style={styles.dialogConfirm}>
              <View style={styles.viewContentConfirm}>
                <Text style={styles.textConfirm}>do you want to book</Text>
                <Text style={styles.textConfirm}>
                  from{' '}
                  {this.state.timeCome +
                    ':00 to ' +
                    this.state.timeLeave +
                    ':00'}
                  ?
                </Text>
              </View>
              <View style={styles.ViewConfirm}>
                <TouchableOpacity
                  style={styles.confirmYesNo}
                  onPress={() => this.changeClickedBooking()}>
                  <Text style={styles.textConfirm}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.confirmYesNo}
                  onPress={() => this.bookShedule()}>
                  <Text style={styles.textConfirm}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
