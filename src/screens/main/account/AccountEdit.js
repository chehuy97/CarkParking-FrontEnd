import React, {Component} from 'react';
import AccountEditCard from '../../../components/account_card/AccountEditCard';
import AccountCard from '../../../components/account_card/AccountCard';
import styles from './Styles';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Image, Text} from 'react-native-elements';
import AccountRadioButton from '../../../components/account_card/AccountRadioButton';
import AccountBirth from '../../../components/account_card/AccountBirth';

export default class AccountEdit extends Component {
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
            source={require('../../../assets/images/userImage.png')}
            style={styles.image}
          />
          <Text style={styles.textImage}>chehuy97</Text>
        </View>
        <View style={styles.viewInfo}>
          <ScrollView>
            <AccountEditCard name="Name: " placeholder={'write your name...'} />
            <AccountRadioButton />
            <AccountBirth />
            <AccountEditCard name="Phone" placeholder="write your phone" />
            <AccountEditCard name="Car:" placeholder="write your name..." />
            <AccountCard name="Balance" value="1,764,264 VND" />
          </ScrollView>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Account');
            }}>
            <View style={styles.viewButtonText}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginTop: 10,
                }}>
                Confirm
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
