import React, {Component} from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import styles from './Styles';
import {CardItem} from 'native-base';
import Axios from 'axios';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carData: [],
    };
  }
  getDataCar = async () => {
    id = await AsyncStorage.getItem('accountId');
    Axios.get('http://192.168.21.90:3000/api/customers/cars/' + id)
      .then(async res => {
        this.setState({
          carData: res.data,
        });
        //console.log(this.state.carData);
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentDidMount = () => {
    this.getDataCar();
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.carData.map(item => (
          <View style={styles.viewCarCard}>
            <View style={styles.viewCarTitle}>
              <Text style={styles.textCarTitle}>Car </Text>
            </View>
            <View style={{flex: 4}}>
              <View style={styles.viewTextContent}>
                <Text style={styles.textCarNameContent}>Number</Text>
                <Text style={styles.textCarValueContent}>
                  : {item.car_number}
                </Text>
              </View>
              <View style={styles.viewTextContent}>
                <Text style={styles.textCarNameContent}>Band</Text>
                <Text style={styles.textCarValueContent}>: {item.brand}</Text>
              </View>
              <View style={styles.viewTextContent}>
                <Text style={styles.textCarNameContent}>Color</Text>
                <Text style={styles.textCarValueContent}>: {item.color}</Text>
              </View>
              <View style={styles.viewTextContent}>
                <Text style={styles.textCarNameContent}>Style</Text>
                <Text style={styles.textCarValueContent}>
                  : {item.car_type}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
