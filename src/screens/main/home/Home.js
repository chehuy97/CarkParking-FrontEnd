import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class Home extends Component {

  static navigationOptions = {
    // headerMode: 'none',
    // header: null,
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //   source={require('../../../assets/images/home-icon.png')}
    //     style={{ tintColor: tintColor }}
    //   />
    // ),
  };
  render() {
    return (
      <View>
          <Text>
              Home
          </Text>
      </View>
    )
  }
}