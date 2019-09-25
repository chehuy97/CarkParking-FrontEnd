import React, { Component } from 'react'
import styles from './Styles'
import strings from '../../../constants/Strings'
import  { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        pass:''
    };
  }
  validate(){
    if((this.state.name === 'che') && (this.state.pass === '123')){
        this.props.navigation.navigate('DrawerOnwer')
    } 
    else if((this.state.name === 'huy') && (this.state.pass === '123')){
        this.props.navigation.navigate('DrawerUser')
    } 
    else {
        this.props.navigation.navigate('Login')
    }
    
  }
render() {
    return (
        <View style = {styles.container}>
            <View style = {styles.containerLogo}>
                <Image
                style={{width: 100 , height: 100}}
                source={require('../../../assets/images/logo-app.png')}/>
                <Text style = {styles.logoText}> {strings.appName}</Text>
            </View>
            <View style = {styles.containerForm}>
                <TextInput 
                    style ={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder = 'Username'
                    placeholderTextColor = '#ffffff'
                    onChangeText={(value) => this.setState({ name: value })}
                    />
                <TextInput 
                    style ={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder = 'Password'
                    placeholderTextColor = '#ffffff'
                    secureTextEntry = {true}
                    onChangeText={(value) => this.setState({ pass: value })}
                    />
                    {/* // value= {this.state.pass}/> */}
                <TouchableOpacity style = {styles.button} onPress={() => this.validate()}> 
                    <Text style = {styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>        
            </View>
            <View style = {styles.signupTextCont}>
                <Text style ={ styles.signupText}>
                    {strings.loginAskAccount}
                </Text>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style = {styles.signupButton}>
                    Signup
                </Text>
                </TouchableOpacity>
            </View>
        </View>  
    );
}
}