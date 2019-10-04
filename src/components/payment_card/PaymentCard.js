import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles'

export default class PaymentCard extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.viewContent}>
               <Text style={styles.textTopic}>{this.props.textTopic}</Text> 
               <Text style={styles.textContent}>{this.props.textContent}</Text> 
            </View>
            <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.textButton}>
                    {this.props.buttonName}
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}
