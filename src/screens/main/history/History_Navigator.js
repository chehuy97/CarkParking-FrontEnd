import React, { Component } from 'react'
import { Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Header } from 'react-native-elements'
import History from './History'
import MenuButton from '../../../components/menu_button/MenuButton'
export default History_Navigator = createAppContainer(createStackNavigator({
    History: {
        screen: History,
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