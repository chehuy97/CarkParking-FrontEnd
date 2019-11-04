import React, {Component} from 'react';
import styles from './Styles';
import strings from '../../../constants/Strings';
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
        <View style={styles.viewLogo}>
          <Image
            style={{width: 120, height: 120}}
            source={require('../../../assets/images/logo-app.png')}
          />
          <Text style={styles.logoText}> {strings.signupName}</Text>
        </View>
        <View style={styles.viewForm}>
          <Input
            containerStyle={styles.inputBox}
            placeholder="Username"
            placeholderTextColor={colors.colorWhite}
            underlineColorAndroid={colors.colorWhite}
            onChangeText={value => this.setState({name: value})}
          />
          <Input
            containerStyle={styles.inputBox}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={colors.colorWhite}
            underlineColorAndroid={colors.colorWhite}
            onChangeText={value => this.setState({pass: value})}
          />
          <Input
            containerStyle={styles.inputBox}
            placeholder="Name"
            placeholderTextColor={colors.colorWhite}
            underlineColorAndroid={colors.colorWhite}
            onChangeText={value => this.setState({name: value})}
          />
          <Input
            containerStyle={styles.inputBox}
            placeholder="Birthday"
            placeholderTextColor={colors.colorWhite}
            underlineColorAndroid={colors.colorWhite}
            onChangeText={value => this.setState({name: value})}
          />
          <Input
            containerStyle={styles.inputBox}
            placeholder="Gender"
            placeholderTextColor={colors.colorWhite}
            underlineColorAndroid={colors.colorWhite}
            onChangeText={value => this.setState({name: value})}
          />
          <Input
            containerStyle={styles.inputBox}
            placeholder="Phone"
            placeholderTextColor={colors.colorWhite}
            underlineColorAndroid={colors.colorWhite}
            onChangeText={value => this.setState({name: value})}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSignupTextCont}>
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
