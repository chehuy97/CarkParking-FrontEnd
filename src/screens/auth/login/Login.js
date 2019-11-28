import React, {Component} from 'react';
import styles from './Styles';
import strings from '../../../constants/Strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import {Input} from 'react-native-elements';
import colors from '../../../constants/Colors';
import axios from 'axios';

export default class Login extends Component {
  // static navigationOptions = {
  //   headerMode: 'none',
  //   header: null,
  // };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      role: 0,
      user: {},
    };
  }
  validate(roleId) {
    if (roleId === 2) {
      this.props.navigation.navigate('DrawerOnwer');
    } else if (roleId === 3) {
      this.props.navigation.navigate('DrawerUser');
    } else {
      alert('You type wrong name or password');
    }
  }

  login = async () => {
    axios
      .post('http://192.168.21.90:3000/api/accounts/login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(async res => {
        if (res.data === 'wrong') {
          alert('You type wrong name or password');
        } else {
          await AsyncStorage.setItem('accountId', res.data.account.id + '');
          await AsyncStorage.setItem(
            'roleId',
            res.data.account.roles[0].id + '',
          );
          this.setState({user: res.data});
          this.validate(this.state.user.account.roles[0].id);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            style={{width: 120, height: 120}}
            source={require('../../../assets/images/logo-app.png')}
          />
          <Text style={styles.logoText}> {strings.appName}</Text>
        </View>
        <View style={styles.containerForm}>
          <Input
            containerStyle={styles.inputBox}
            inputStyle={{color: 'white'}}
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
            onChangeText={value => this.setState({username: value})}
          />
          <Input
            containerStyle={styles.inputBox}
            inputStyle={{color: 'white'}}
            placeholder="Password"
            secureTextEntry={true}
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
            onChangeText={value => this.setState({password: value})}
          />
          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>{strings.loginAskAccount}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
