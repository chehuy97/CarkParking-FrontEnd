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
import {TouchableOpacity} from 'react-native';
//import HistoryCard from '../../../components/history_card/HistoryCard';
import Axios from 'axios';
export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {histotiesData: [], refreshing: false};
  }
  getHistories = async () => {
    var id = await AsyncStorage.getItem('accountId');
    Axios.get('http://192.168.21.90:3000/api/owners/histories/' + id)
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
  componentDidMount = () => {
    this.getHistories();
  };
  render() {
    return (
      <View style={{flex: 1}}>
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
                <Text style={styles.textBold}>{data.account.name}</Text>
                <Text style={styles.textNormal}>{data.car_number}</Text>
                <Text style={styles.textNormal}>{data.day}</Text>
              </View>
              <View style={styles.viewTime}>
                <Text style={styles.textBold}>{data.time_come}:00</Text>
                <Text style={styles.textBold}>{data.time_leave}:00</Text>
              </View>
              <View style={styles.viewTime}>
                <Text style={styles.textBold}>{data.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
