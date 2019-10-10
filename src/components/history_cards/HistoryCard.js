import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {CardItem} from 'native-base';

export default class HistoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        longitude: 108.208523,
        latitude: 16.074037,
      },
    };
  }
  render() {
    const {longitude, latitude} = this.props;
    return (
      <View>
        <CardItem>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={require('../../assets/images/clock.png')}
            />
          </View>
          <View style={styles.viewHistoryInfo}>
            <TouchableOpacity
              onPress={() => this.props.handlePress(longitude, latitude)}>
              <Text style={styles.textName}>{this.props.textName}</Text>
            </TouchableOpacity>
            <Text style={styles.textAddress}>{this.props.textAddress}</Text>
          </View>
        </CardItem>
      </View>
    );
  }
}
