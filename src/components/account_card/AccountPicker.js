import React, {Component} from 'react';
import styles from './Styles';
import {Picker, View, Text} from 'react-native';
import {CardItem} from 'native-base';

export default class AccountPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'huy',
      month: 'sdf',
      year: 'sss',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <CardItem>
          <Text style={styles.textName}>Birthday: </Text>
          <Picker
            selectedValue={this.state.date}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({date: itemValue})
            }>
            <Picker.Item label="Date" value="Date" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <Picker
            selectedValue={this.state.month}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({month: itemValue})
            }>
            <Picker.Item label="Month" value="Month" />
            <Picker.Item label="Java" value="Java" />
          </Picker>
          <Picker
            selectedValue={this.state.year}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({year: itemValue})
            }>
            <Picker.Item label="Year" value="Year" />
            <Picker.Item label="PHP" value="PHP" />
          </Picker>
        </CardItem>
      </View>
    );
  }
}
