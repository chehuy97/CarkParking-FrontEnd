import React, {Component} from 'react';
import {CardItem, Text} from 'native-base';
import styles from './Styles';
import {Input} from 'react-native-elements';

export default class AccountEditCard extends Component {
  render() {
    return (
      <CardItem style={styles.container}>
        <Text style={styles.textName}>Birthday</Text>
        <Input containerStyle={styles.textInputBirth} placeholder="day" />
        <Input containerStyle={styles.textInputBirth} placeholder="month" />
        <Input containerStyle={styles.textInputBirth} placeholder="year" />
      </CardItem>
    );
  }
}
