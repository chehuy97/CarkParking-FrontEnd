import React, {Component} from 'react';
import styles from './Styles';
import strings from '../../../constants/Strings';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import colors from '../../../constants/Colors';

export default class Signup extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            style={{width: 120, height: 120}}
            source={require('../../../assets/images/logo-app.png')}
          />
          <Text style={styles.logoText}> {strings.signupName}</Text>
        </View>
        <View style={styles.containerForm}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid={colors.loginUnderlineColor}
            placeholder="Username"
            placeholderTextColor={colors.colorWhite}
            onChangeText={value => this.setState({name: value})}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid={colors.loginUnderlineColor}
            placeholder="Password"
            placeholderTextColor={colors.colorWhite}
            secureTextEntry={true}
            onChangeText={value => this.setState({pass: value})}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>{strings.signupAsk}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.signupButton}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
