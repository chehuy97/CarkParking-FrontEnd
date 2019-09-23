import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Payment extends Component {
  // static navigationOptions = {
  //   drawerLabel: 'Payment',
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //     source={require('../../../assets/images/payment-icon.png')}
  //       style={{ tintColor: tintColor }}
  //     />
  //   ),
  //   headerMode: 'none',
  //   header: null
  // };
  render() {
    return (
      <View>
          <Text>
              Payment
          </Text>
      </View>
    )
  }
}