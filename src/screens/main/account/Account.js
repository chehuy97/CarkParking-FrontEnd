import React, {Component} from 'react';
import AccountCard from '../../../components/account_card/AccountCard';
import styles from './Styles';
import {View, TouchableOpacity, AsyncStorage} from 'react-native';
import {CardItem, Text} from 'native-base';
import {Image, Button} from 'react-native-elements';
import Axios from 'axios';
import Styles from '../../../components/account_card/Styles';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataId: '',
      roleId: 0,
      account: {
        id: 0,
        username: '',
        password: '',
        status: true,
        name: '',
        birthday: '',
        gender: '',
        phone: '',
        image: '',
        balance: 0,
        car: {
          id: 0,
          color: '',
          brand: '',
          car_number: '',
          accountId: 0,
        },
      },
    };
  }
  getAccount = async () => {
    var id = await AsyncStorage.getItem('accountId');
    Axios.get('http://192.168.21.90:3000/api/accounts/' + id)
      .then(async res => {
        this.setState({account: res.data});
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount = async () => {
    await this.getAccount();
    var role = await AsyncStorage.getItem('roleId');
    this.setState({roleId: role});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            source={{uri: this.state.account.image}}
            style={styles.image}
          />
          <Text style={styles.textImage}>{this.state.account.username}</Text>
        </View>
        <View style={styles.viewInfo}>
          <AccountCard name="Name " value={this.state.account.name} />
          <AccountCard name="Gender " value={this.state.account.gender} />
          <AccountCard name="Birthday " value={this.state.account.birthday} />
          <AccountCard name="Phone" value={this.state.account.phone} />
          {this.state.roleId === '3' ? (
            <CardItem style={styles.containerCard}>
              <Text style={styles.textName}>Car</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AccountCar')}>
                <Text style={styles.textValue}>Detail</Text>
              </TouchableOpacity>
            </CardItem>
          ) : null}
          <AccountCard name="Balance" value={this.state.account.balance} />
        </View>
        <View style={styles.viewButton}>
          {/* <Button
            title="Edit"
            buttonStyle={styles.button}
            onPress={() => {
              this.props.navigation.navigate('AccountEdit');
            }}
          /> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('AccountEdit');
            }}>
            <View style={styles.viewButtonText}>
              <Text style={{color: 'white', fontWeight: 'bold', marginTop: 10}}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <View style={styles.viewButtonText}>
              <Text style={{color: 'white', fontWeight: 'bold', marginTop: 10}}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
