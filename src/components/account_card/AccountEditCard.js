import React, { Component } from 'react';
import { CardItem, Text } from 'native-base';
import styles from './Styles'
import { TextInput } from 'react-native';

export default class AccountEditCard extends Component {
  render() {
    return (
            <CardItem style={styles.container}>
              <Text style={styles.textName}>{this.props.name}</Text>
              <TextInput/>
             </CardItem>
    );
  }
}
