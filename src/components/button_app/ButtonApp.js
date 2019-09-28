import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'native-base'
import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ButtonApp extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Button style={styles.Button}>
            <Text style={styles.textButton}>{this.props.btnname}</Text>
            </Button>
      </View>
    );
  }
}
