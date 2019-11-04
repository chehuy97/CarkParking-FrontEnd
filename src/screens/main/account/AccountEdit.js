import React, {Component} from 'react';
import AccountEditCard from '../../../components/account_card/AccountEditCard';
import AccountCard from '../../../components/account_card/AccountCard';
import styles from './Styles';
import {View, ScrollView} from 'react-native';
import {Image, Text, Button} from 'react-native-elements';
import AccountRadioButton from '../../../components/account_card/AccountRadioButton';
import AccountBirth from '../../../components/account_card/AccountBirth';

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
          <ScrollView>
            <AccountEditCard name="Name: " placeholder="write your name..." />
            <AccountRadioButton />
            <AccountBirth />
            <AccountEditCard
              name="Address: "
              placeholder="write your Address..."
            />
            <AccountEditCard name="Phone" placeholder="write your phone" />
            <AccountEditCard name="Car:" placeholder="write your name..." />
            <AccountCard name="Balance" value="1,764,264 VND" />
          </ScrollView>
        </View>
        <View style={styles.viewButton}>
          <Button
            title="Confirm"
            buttonStyle={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Account');
            }}
          />
        </View>
      </View>
    );
  }
}
