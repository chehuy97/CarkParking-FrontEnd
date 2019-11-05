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
import {Input} from 'react-native-elements';
import colors from '../../../constants/Colors';
import {CardItem} from 'native-base';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carNumber: 'HR26DK8337',
      clickedCarNumber: false,
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
  render() {
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
              name="Open hour:"
              value="6:00 - 22:00"
            />
            <YardInfoCard
              iconName="tag"
              name="Slot:"
              value="1 available parks"
            />
          </View>
        </View>
        <View style={styles.viewBookedShedule}>
          <ScrollView></ScrollView>
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
            <TouchableOpacity style={styles.pickerTime}>
              <View style={styles.textTime}>
                <Text>00:00</Text>
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
            <Text style={styles.bookingText}>LEAVE:</Text>
            <TouchableOpacity style={styles.pickerTime}>
              <View style={styles.textTime}>
                <Text>00:00</Text>
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
