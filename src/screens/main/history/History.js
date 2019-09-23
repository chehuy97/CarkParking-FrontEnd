import React, { Component } from 'react';
import styles from './Styles'
import { Image, View } from 'react-native'
import { Button } from 'native-base'
import HistoryCard from '../../../components/history_card/HistoryCard'

export default class History extends Component {
  // static navigationOptions = {
  //   drawerLabel: 'History',
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('../../../assets/images/history-icon.png')}
  //       style={{ tintColor: tintColor }}
  //     />
  //   ),
  //   headerMode: 'none',
  //   header: null
  // };
  render() {
    return (
      <View>
        <HistoryCard/>
      </View>
    );
  }
}
