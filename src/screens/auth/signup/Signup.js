import React, { Component } from 'react'
import styles from './Styles'
import  { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

export default class Signup extends Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  };
render() {
    return (
        <View style = {styles.container}>
            <View style = {styles.containerLogo}>
                <Image
                style={{width: 100 , height: 100}}
                source={require('../../../assets/images/logo-app.png')}/>
                <Text style = {styles.logoText}> Signup Account</Text>
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
                <TouchableOpacity style = {styles.button}>   
                    <Text style = {styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>        
            </View>
            <View style = {styles.signupTextCont}>
                <Text style ={ styles.signupText}>
                    Already have account?
                </Text>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')}>
                <Text style = {styles.signupButton}>
                    Signin
                </Text>
                </TouchableOpacity>
            </View>
        </View>  
    );
}
}