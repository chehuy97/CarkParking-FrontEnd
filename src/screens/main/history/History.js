import React, {Component} from 'react';
import styles from './Styles';
import {
  Image,
  View,
  ScrollView,
  Text,
  AsyncStorage,
  RefreshControl,
} from 'react-native';
import {Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Axios from 'axios';
export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      histotiesData: [],
      refreshing: false,
      clickReport: false,
      carNumber: '',
      transactionId: 0,
    };
  }

  changeClickReport = () => {
    this.setState({clickReport: !this.state.clickReport});
  };

  getHistories = async () => {
    var id = await AsyncStorage.getItem('accountId');
    Axios.get('http://192.168.21.90:3000/api/customers//histories/' + id)
      .then(async res => {
        this.setState({histotiesData: res.data});
      })
      .catch(error => {
        console.log(error);
      });
  };
  _onRefresh = () => {
    this.setState({refreshing: true});
    this.getHistories().then(() => this.setState({refreshing: false}));
  };
  deleteHistory = async id => {
    var accountid = await AsyncStorage.getItem('accountId');
    Axios.delete(
      'http://192.168.21.90:3000/api/customers//histories/' +
        accountid +
        '/' +
        id,
    )
      .then(async res => {
        this._onRefresh();
      })
      .catch(error => {
        console.log(error);
      });
  };
  send_report = async () => {
    this.changeClickReport();
    Axios.post('http://192.168.21.90:3000/api/customers/histories/reports', {
      car_number: this.state.carNumber,
      transactionId: this.state.transactionId,
    })
      .then(async res => {
        this._onRefresh();
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount = () => {
    this.getHistories();
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <View style={styles.viewTitle}>
          <View>
            <Text style={styles.viewInfo}>Information</Text>
          </View>
          <View style={styles.viewTime}>
            <Text>Time</Text>
          </View>
          <View style={styles.viewPrice}>
            <Text>Price</Text>
          </View>
        </View> */}
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this._onRefresh()}
            />
          }
          style={styles.viewInfo}
          showsVerticalScrollIndicator={false}>
          {this.state.histotiesData.map(data => (
            <View style={styles.container}>
              <View style={styles.viewCard}>
                <Text style={styles.textBold}>{data.yard.account.name}</Text>
                <Text style={styles.textNormal}>{data.yard.address}</Text>
                <Text style={styles.textNormal}>{data.day}</Text>
                <Text style={styles.textNormal}>position: {data.slot}</Text>
              </View>
              <View style={styles.viewTime}>
                <Text style={styles.textBold}>{data.time_come}:00</Text>
                <Text style={styles.textBold}>{data.time_leave}:00</Text>
              </View>
              <View style={styles.viewTime}>
                <Text style={styles.textBold}>{data.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => {
                  this.setState({transactionId: data.id});
                  this.changeClickReport();
                }}>
                <Image
                  source={require('../../../assets/images/newspaper.png')}
                  style={styles.imageButton}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={styles.viewButton}
                onPress={() => this.deleteHistory(data.id)}>
                <Image
                  source={require('../../../assets/images/remove.png')}
                  style={styles.imageButton}
                />
              </TouchableOpacity> */}
            </View>
          ))}
        </ScrollView>
        <Modal isVisible={this.state.clickReport}>
          <View style={styles.dialogConfirm}>
            <View style={styles.viewContentConfirm}>
              <Text style={styles.textConfirm}>
                Write the car number you want to report:
              </Text>
              <Input
                placeholder="car number"
                onChangeText={value => this.setState({carNumber: value})}
              />
            </View>
            <View style={styles.ViewConfirm}>
              <TouchableOpacity
                style={styles.confirmYesNo}
                onPress={() => this.changeClickReport()}>
                <Text style={styles.textConfirm}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmYesNo}
                onPress={() => this.send_report()}>
                <Text style={styles.textConfirm}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
