import React, { Component } from 'react';
import styles from './Styles'
import { Image, ScrollView } from 'react-native'
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
      <ScrollView style={styles.container}>
        <HistoryCard name='Harry Kane'/>
        <HistoryCard name='James Harden'/>
        <HistoryCard name='Roger Federer'/>
        <HistoryCard name='Heung Min Son'/>
        <HistoryCard name='Novak Djokovic'/>
        <HistoryCard name='Erik Lamela'/>
        <HistoryCard name='Russell Westrook'/>
      </ScrollView>
    );
  }
}
