import React, {Component} from 'react';
import {CardItem, Text} from 'native-base';
import styles from './Styles';
import {Input} from 'react-native-elements';

export default class AccountEditCard extends Component {
  render() {
    return (
      <CardItem style={styles.container}>
        <Text style={styles.textName}>{this.props.name}</Text>
        <Input
          containerStyle={styles.textInput}
          placeholder={this.props.placeholder}
        />
      </CardItem>
    );
  }
}
