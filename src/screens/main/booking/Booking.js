import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import YardInfoCard from '../../../components/booking_card/YardInfoCard';
import styles from './Styles';
import colors from '../../../constants/Colors';
import {CardItem} from 'native-base';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import Axios from 'axios';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carNumber: 'HR26DK8337',
      clickedCarNumber: false,
      timeCome: 0,
      timeLeave: 0,
      clickedTimeCome: false,
      clickedTimeLeave: false,
      addressData: {},
      //slotData: [],
      lenghtSlot: 0,
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
  getAddressOwner = async () => {
    var id = 2;
    Axios.get('http://192.168.21.90:3000/api/customers/owneraddress/' + id)
      .then(async res => {
        this.setState({
          addressData: res.data,
          lenghtSlot: res.data.slots.length,
        });
        //console.log(this.state.addressData);
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getAddressOwner();
    // console.log();
  }
  render() {
    const timeCome = [];
    for (i = 0; i < 24; i++) {
      timeCome.push({key: i});
    }
    const timeLeave = [];
    for (i = this.state.timeCome + 1; i < 24; i++) {
      timeLeave.push({key: i});
    }
    const keySlot = [];
    for (i = 0; i < this.state.lenghtSlot; i++) {
      keySlot.push({key: i});
    }
    // const keyTime = [];
    // for (i = 0; i < 24; i++) {
    //   if(this.state.addressData.slots)
    // }
    const keyTime = [];
    for (
      i = this.state.addressData.time_open;
      i <= this.state.addressData.time_close;
      i++
    ) {
      keyTime.push({key: i});
    }
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            source={require('../../../assets/images/imgAddress.png')}
            style={styles.imageAddress}
          />
          <View>
            <YardInfoCard
              iconName="location"
              name="Address:"
              value="112/59 Tran Cao Van"
            />
            <YardInfoCard
              iconName="clock"
              name="Open time:"
              value="6:00 - 22:00"
            />
            <YardInfoCard iconName="tag" name="Slot:" value="2 available" />
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
                    return <View style={styles.lineTimeNone} />;
                  } else if (
                    this.state.addressData.slots[slot.key].times[time.key] ===
                    '1'
                  ) {
                    return <View style={styles.lineTimeBooked} />;
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
                <TouchableOpacity
                  onPress={() => this.chooseCarNumber('HR26DK8337')}>
                  <CardItem style={styles.dialogCardCarNumber}>
                    <Text style={{flex: 5}}>HR26DK8337</Text>
                    <Icon
                      style={{flex: 1}}
                      name="arrow-right"
                      size={30}
                      color={colors.loginButton}
                      type="evilicon"
                    />
                  </CardItem>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.chooseCarNumber('HD87LY9284')}>
                  <CardItem style={styles.dialogCardCarNumber}>
                    <Text style={{flex: 5}}>HD87LY9284</Text>
                    <Icon
                      style={{flex: 1}}
                      name="arrow-right"
                      size={30}
                      color={colors.loginButton}
                      type="evilicon"
                    />
                  </CardItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeClickCarNumber()}>
                  <CardItem style={styles.dialogCardCarNumber}>
                    <Text>Close</Text>
                  </CardItem>
                </TouchableOpacity>
              </View>
            </Modal>
          </CardItem>
          <CardItem style={styles.cardBooking}>
            <Text style={styles.bookingText}>COME:</Text>
            <TouchableOpacity
              style={styles.pickerTime}
              onPress={() => this.changeClickTimeCome()}>
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
                  {timeCome.map(({key}) => (
                    <TouchableOpacity onPress={() => this.chooseTimeCome(key)}>
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
            <Text style={styles.textPriceValue}>20,000</Text>
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
