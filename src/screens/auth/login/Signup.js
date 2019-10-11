import React, {Component} from 'react';
import styles from './Styles';
import strings from '../../../constants/Strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Input} from 'react-native-elements';
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
          <Input
            containerStyle={styles.inputBox}
            placeholder="Username"
            placeholderTextColor={colors.colorWhite}
            underlineColorAndroid={colors.colorWhite}
            leftIcon={
              <Icon
                style={styles.inputIcon}
                name="user"
                size={25}
                color={colors.colorWhite}
                style={{marginRight: 10}}
              />
            }
            onChangeText={value => this.setState({name: value})}
          />
          <Input
            containerStyle={styles.inputBox}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={colors.colorWhite}
            underlineColorAndroid={colors.colorWhite}
            leftIcon={
              <Icon
                style={styles.inputIcon}
                name="lock"
                size={25}
                color={colors.colorWhite}
                style={{marginRight: 10}}
              />
            }
            onChangeText={value => this.setState({pass: value})}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
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
