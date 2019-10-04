import React, {Component} from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Header} from 'react-native-elements';
import Account from './Account';
import MenuButton from '../../../components/menu_button/MenuButton';
import AccountEdit from './AccountEdit';
export default Account_Navigator = createAppContainer(
  createStackNavigator(
    {
      Account: {
        screen: Account,
        navigationOptions: ({navigation}) => ({
          header: (
            <Header
              leftComponent={
                <MenuButton
                  name="menu"
                  color={'#fff'}
                  size={20}
                  navigation={navigation}
                />
              }
              centerComponent={<Text>Account</Text>}
              // rightComponent={<RightTopButton nameRedirect="AddFriend" name="person-add" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
            />
          ),
        }),
        AccountEdit: {
          screen: AccountEdit,
          navigationOptions: ({navigation}) => ({
            header: (
              <Header
                leftComponent={
                  <MenuButton
                    name="menu"
                    color={'#fff'}
                    size={20}
                    navigation={navigation}
                  />
                }
                centerComponent={<Text>AccountEdit</Text>}
                // rightComponent={<RightTopButton nameRedirect="AddFriend" name="person-add" color={colors.white} size={fonts.fontMenuSize} navigation={navigation}/>}
              />
            ),
          }),
        },
      },
    },
    {
      initialRouteName: 'AccountEdit',
    },
  ),
);
