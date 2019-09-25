import React, { Component } from 'react'
import AccountCard from '../../../components/account_card/AccountCard'
import styles from './Styles'
import { View } from 'react-native'
import { Image,Text } from 'react-native-elements'

export default class Account extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.viewImage}>
            <Image
            source={require('../../../assets/images/userImage.png')}
            style={styles.image}/>
            <Text style={styles.text}>Chehuy97</Text>
          </View>
          <View style={styles.viewInfo}>
            <AccountCard name="Name " value="Harry Kane" />
            <AccountCard name="Sex " value="Male" />
            <AccountCard name="Age " value="25" />
            <AccountCard name="Address " value="17 Bil Nilchoson" />
            <AccountCard name="Car" value="7K23-8BC3E" />
          </View>
          <View style={styles.viewBalance}>
            <AccountCard name="Balance" value="1,764,264 VND"/>
          </View>
      </View>
    );
  }
}
