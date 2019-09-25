import React, { Component } from 'react';
import { CardItem, Text } from 'native-base';
import styles from './Styles'

export default class AccountCard extends Component {
  render() {
    return (
            <CardItem style={styles.container}>
              <Text style={styles.textName}>{this.props.name}</Text>
              <Text style={styles.textValue}>{this.props.value}</Text>
             </CardItem>
    );
  }
}
