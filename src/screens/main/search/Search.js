import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from 'react-native-elements';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Input
            style={styles.inputText}
            placeholder="choose destination"
            onSubmitEditing={() => {
              this.props.navigation.navigate('Home', {
                value: this.state.result,
              });
            }}
            leftIcon={
              <Icon
                name="room"
                style={styles.leftIcon}
                size={25}
                color="#d11141"
              />
            }
            onChangeText={value => this.setState({result: value})}
          />
          <Text>{this.state.result}</Text>
        </View>
      </View>
    );
  }
}
