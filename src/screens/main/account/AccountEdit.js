import React, {Component} from 'react';
import AccountCard from '../../../components/account_card/AccountCard';
import styles from './Styles';
import {View} from 'react-native';
import {Image, Text} from 'react-native-elements';
import Button from '../../../components/button_app/ButtonApp';

export default class AccountEdit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            source={require('../../../assets/images/userImage.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Chehuy97</Text>
        </View>
        <View style={styles.viewInfo}>
          <AccountCard name="Name " />
          <AccountCard name="Sex " />
          <AccountCard name="Age " />
          <AccountCard name="Address " />
          <AccountCard name="Car" />
          <AccountCard name="Balance" />
        </View>
        <View style={styles.viewButtonEdit}>
          <Button btnname="Confirm" />
        </View>
      </View>
    );
  }
}
