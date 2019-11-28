import React, {Component} from 'react';
import styles from './styles';
import {CardItem, Text, Right, Left, View} from 'native-base';
import {Image, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
export default class HistoryCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewCard}>
          <Text style={styles.textBold}>{this.props.name}</Text>
          <Text style={styles.textNormal}>{this.props.address}</Text>
        </View>
        <View style={styles.viewTime}>
          <Text style={styles.textBold}>{this.props.timeCome}:00</Text>
          <Text style={styles.textBold}>{this.props.timeLeave}:00</Text>
        </View>
        <View style={styles.viewTime}>
          <Text style={styles.textBold}>{this.props.price}</Text>
        </View>
        <TouchableOpacity style={styles.viewButton}>
          <Image
            source={require('../../assets/images/details.png')}
            style={styles.imageButton}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewButton}>
          <Image
            source={require('../../assets/images/remove.png')}
            style={styles.imageButton}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
