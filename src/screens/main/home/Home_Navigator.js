import React, { Component } from 'react'
import { Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import Home from './Home'
import MenuButton from '../../../components/menu_button/MenuButton'
export default Home_Navigator = createAppContainer(createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            header: 
                <Header
                leftComponent={<MenuButton name="menu" color={'#fff'} size={20} navigation={navigation}/>}
                centerComponent={<Text>Account</Text>}
                // rightComponent={<RightTopButton nameRedirect="AddFriend" name="person-add" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            />
        })
    }
})) 