import React, { Component } from 'react';
import styles from './styles'
import { CardItem, Text, Right, Left, View } from 'native-base';
import { Image, Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class HistoryCard extends Component {
  render() {
    return (
            <CardItem style={styles.container}>
            <Image
              style={styles.imageCard}
              source={require('../../assets/images/userImage.png')}
            />
            <View style={styles.viewCard}>
              <Text>{this.props.name}</Text>
            </View>
            <TouchableOpacity style={styles.buttonCard}>
              <Image
                  source={require('../../assets/images/details.png')}
                  style={styles.imageButton}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonCard}>
              <Image
                  source={require('../../assets/images/remove.png')}
                  style={styles.imageButton}/>
            </TouchableOpacity>
             </CardItem>
    );
  }
}