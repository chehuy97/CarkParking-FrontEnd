import React, {Component} from 'react';
import styles from './Styles';
import {CardItem, View} from 'native-base';
import RadioButton from 'radio-button-react-native';
import {Text} from 'react-native-elements';

export default class AccountRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleOnPress(value) {
    this.setState({value: value});
  }
  render() {
    return (
      <CardItem style={styles.container}>
        <Text style={styles.textName}>Gender:</Text>
        <View style={styles.radioButton}>
          <RadioButton
            currentValue={this.state.value}
            value={0}
            onPress={this.handleOnPress.bind(this)}>
            <Text>Male</Text>
          </RadioButton>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            currentValue={this.state.value}
            value={1}
            onPress={this.handleOnPress.bind(this)}>
            <Text>Fermale</Text>
          </RadioButton>
        </View>
      </CardItem>
    );
  }
}
