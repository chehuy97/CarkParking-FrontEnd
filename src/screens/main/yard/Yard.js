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
      yardData: [],
      date: [],
      clickedDate: false,
      clickedTimeOpen: false,
      clickedTimeClose: false,
      clickedBtnChange: false,
      clickedConfirm: false,
      timeChange: false,
      statusYard: true,
      timeOpen: 0,
      timeClose: 0,
      dateChoose: 'default',
      func: 0,
    };
  }
  changeClickedDate = () => {
    this.setState({
      clickedDate: !this.state.clickedDate,
    });
  };
  chooseDate = dateChoose => {
    this.setState({
      dateChoose: dateChoose,
      clickedDate: !this.state.clickedDate,
    });
  };
  changeClickedTimeOpen = () => {
    this.setState({
      clickedTimeOpen: !this.state.clickedTimeOpen,
    });
  };
  chooseTimeOpen = timeOpen => {
    this.setState({
      timeOpen: timeOpen,
      clickedTimeOpen: !this.state.clickedTimeOpen,
    });
  };
  changeClickedTimeClose = () => {
    this.setState({
      clickedTimeClose: !this.state.clickedTimeClose,
    });
  };
  chooseTimeClose = timeClose => {
    this.setState({
      timeClose: timeClose,
      clickedTimeClose: !this.state.clickedTimeClose,
    });
  };
  changeClickedBtnChange = () => {
    this.setState({
      clickedBtnChange: !this.state.clickedBtnChange,
    });
  };
  changeTimeChange = () => {
    this.setState({
      statusYard: true,
      timeChange: true,
      clickedBtnChange: !this.state.clickedBtnChange,
    });
  };
  changeStatusChange = () => {
    this.setState({
      statusYard: false,
      timeChange: false,
      clickedBtnChange: !this.state.clickedBtnChange,
    });
  };
  changeConfirm = () => {
    this.setState({
      clickedConfirm: !this.state.clickedConfirm,
    });
  };
  setDay = async () => {
    var date = await new Date();
    date.setDate(new Date().getDate() + 5);
    this.setState({
      dateChoose:
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
    });
    for (i = 5; i < 12; i++) {
      date.setDate(new Date().getDate() + i);
      var day =
        date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      this.state.date.push({day: day});
    }
  };
  getDataYard = async () => {
    var id = await AsyncStorage.getItem('accountId');
    Axios.get('http://192.168.21.90:3000/api/owners/yards/' + id)
      .then(async res => {
        this.setState({
          yardData: res.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  postChangeTimeOpenClose = async () => {
    this.setState({
      clickedConfirm: !this.state.clickedConfirm,
      clickedBtnChange: !this.state.clickedBtnChange,
    });
    var time_open = 0;
    var time_close = 0;
    if (this.state.func === 1) {
      time_open = this.state.timeOpen;
      time_close = this.state.timeClose;
    }
    const res = await Axios.post(
      'http://192.168.21.90:3000/api/owners/changeschedules',
      {
        day: this.state.dateChoose,
        time_open: time_open,
        time_close: time_close,
        status: this.state.statusYard,
        yardId: this.state.yardData.id,
      },
    );
    alert('You update successfully');
  };
  comfirmChange = () => {
    if (this.state.func === 1) {
      this.setState({clickedConfirm: !this.state.clickedConfirm});
      this.postChangeTimeOpenClose();
      alert('You update successfully');
    } else if (this.state.func === 2) {
      alert('hoho');
    } else {
      alert('cc');
    }
  };
  componentDidMount = async () => {
    await this.getDataYard();
    await this.setDay();
  };
  render() {
    const timeOpen = [];
    for (i = 0; i < 24; i++) {
      timeOpen.push({key: i});
    }
    const timeClose = [];
    for (i = this.state.timeOpen + 1; i < 24; i++) {
      timeClose.push({key: i});
    }
    timeClose.push({key: 0});
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            source={{uri: this.state.yardData.image_yard}}
            style={styles.imageAddress}
          />
          <View>
            <YardInfoCard
              iconName="location"
              name="Address:"
              value={this.state.yardData.address}
            />
            <YardInfoCard
              iconName="clock"
              name="Open time:"
              value={
                this.state.yardData.time_open +
                ':00 - ' +
                this.state.yardData.time_close +
                ':00'
              }
            />
            <YardInfoCard
              iconName="tag"
              name="Slot:"
              value={this.state.yardData.slot + ' available'}
            />
          </View>
        </View>
        <View style={styles.viewBookedShedule}></View>
        <View style={styles.viewBookTime}>
          <CardItem style={styles.cardBooking}>
            <Text style={styles.bookingText}>CHANGE STATUS DATE:</Text>
          </CardItem>
          <CardItem style={styles.cardBooking}>
            <Text style={styles.bookingText}>DATE:</Text>
            <TouchableOpacity
              style={styles.pickerCarNumber}
              onPress={() => this.changeClickedDate()}>
              <View style={styles.textCarNumber}>
                <Text>{this.state.dateChoose}</Text>
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
            <TouchableOpacity onPress={() => this.changeClickedBtnChange()}>
              <View style={styles.btnChange}>
                <Text style={{color: 'white'}}>Change</Text>
              </View>
            </TouchableOpacity>
            <Modal isVisible={this.state.clickedDate}>
              <View style={styles.dialogCarNumber}>
                <CardItem style={styles.dialogCardCarNumber}>
                  <Text style={{fontWeight: 'bold'}}>Date</Text>
                </CardItem>
                <ScrollView>
                  {this.state.date.map(item => (
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
                <TouchableOpacity onPress={() => this.changeClickedDate()}>
                  <CardItem style={styles.dialogCardCarNumber}>
                    <Text>Close</Text>
                  </CardItem>
                </TouchableOpacity>
              </View>
            </Modal>
            <Modal isVisible={this.state.clickedBtnChange}>
              <View style={styles.dialogConfirm}>
                <View style={styles.viewContentConfirm}>
                  <Text style={styles.textConfirm}>
                    You choose change time open/close
                  </Text>
                  <Text style={styles.textConfirm}> or cancel that day?</Text>
                </View>
                <View style={styles.ViewConfirm}>
                  <TouchableOpacity
                    style={styles.confirmYesNo}
                    onPress={() => this.changeClickedBtnChange()}>
                    <Text style={styles.textConfirm}>Abort</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.confirmYesNo}
                    onPress={() => this.changeTimeChange()}>
                    <Text style={styles.textConfirm}>Time</Text>
                    <Text style={styles.textConfirm}>Open/close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.confirmYesNo}
                    onPress={() => {
                      this.setState({func: 2});
                      this.changeConfirm();
                    }}>
                    <Text style={styles.textConfirm}>Cancel</Text>
                    <Text style={styles.textConfirm}>Day</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </CardItem>
          {this.state.timeChange ? (
            <View>
              <CardItem style={styles.cardBooking}>
                <Text style={styles.bookingText}>OPEN AT:</Text>
                <TouchableOpacity
                  style={styles.pickerTime}
                  onPress={() => {
                    this.changeClickedTimeOpen();
                  }}>
                  <View style={styles.textTime}>
                    <Text>{this.state.timeOpen}:00</Text>
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
                <Modal isVisible={this.state.clickedTimeOpen}>
                  <View style={styles.dialogTime}>
                    <CardItem style={styles.dialogCardCarNumber}>
                      <Text style={{fontWeight: 'bold'}}>Time Open</Text>
                    </CardItem>
                    <ScrollView style={{height: 180, backgroundColor: 'white'}}>
                      {timeOpen.map(item => (
                        <TouchableOpacity
                          onPress={async () => {
                            await this.chooseTimeOpen(item.key);
                            if (this.state.timeOpen !== 23) {
                              this.setState({
                                timeClose: this.state.timeOpen + 1,
                              });
                            } else {
                              this.setState({timeClose: 0});
                            }
                          }}>
                          <CardItem style={styles.dialogCardCarNumber}>
                            <Text style={{flex: 5}}>{item.key}:00</Text>
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
                    <TouchableOpacity
                      onPress={() => this.changeClickedTimeOpen()}>
                      <CardItem style={styles.dialogCardCarNumber}>
                        <Text>Close</Text>
                      </CardItem>
                    </TouchableOpacity>
                  </View>
                </Modal>
                <Text style={styles.bookingText}>CLOSE AT:</Text>
                <TouchableOpacity
                  style={styles.pickerTime}
                  onPress={() => {
                    this.changeClickedTimeClose();
                  }}>
                  <View style={styles.textTime}>
                    <Text>{this.state.timeClose}:00</Text>
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
                <Modal isVisible={this.state.clickedTimeClose}>
                  <View style={styles.dialogTime}>
                    <CardItem style={styles.dialogCardCarNumber}>
                      <Text style={{fontWeight: 'bold'}}>Time Close</Text>
                    </CardItem>
                    <ScrollView style={{height: 180, backgroundColor: 'white'}}>
                      {timeClose.map(item => (
                        <TouchableOpacity
                          onPress={async () => {
                            await this.chooseTimeClose(item.key);
                          }}>
                          <CardItem style={styles.dialogCardCarNumber}>
                            <Text style={{flex: 5}}>{item.key}:00</Text>
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
                    <TouchableOpacity
                      onPress={() => this.changeClickedTimeClose()}>
                      <CardItem style={styles.dialogCardCarNumber}>
                        <Text>Close</Text>
                      </CardItem>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </CardItem>
              <TouchableOpacity
                style={styles.btnConfirm}
                onPress={() => {
                  this.setState({func: 1});
                  this.changeConfirm();
                }}>
                <View>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Confirm
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
          <Modal isVisible={this.state.clickedConfirm}>
            <View style={styles.dialogConfirm}>
              <View style={styles.viewContentConfirm}>
                <Text style={styles.textConfirm}>Do you Confirm ?</Text>
              </View>
              <View style={styles.ViewConfirm}>
                <TouchableOpacity
                  style={styles.confirmYesNo}
                  onPress={() => this.changeConfirm()}>
                  <Text style={styles.textConfirm}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.confirmYesNo}
                  onPress={() => this.postChangeTimeOpenClose()}>
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
