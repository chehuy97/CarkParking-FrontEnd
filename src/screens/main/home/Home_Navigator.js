import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Search from './Search';
import colors from '../../../constants/Colors';
const Home_StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        // eslint-disable-next-line react/jsx-no-undef
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: colors.appColor,
        },
        headerTintColor: colors.colorTextWhite,
      }),
    },
    Search: {
      screen: Search,
      navigationOptions: ({navigation}) => ({
        title: 'Search',
        // eslint-disable-next-line react/jsx-no-undef
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: colors.appColor,
        },
        headerTintColor: colors.colorTextWhite,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default Home_StackNavigator;
