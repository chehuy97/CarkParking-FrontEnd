import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/main/home/Home'
import History from './screens/main/history/History'
import Payment from './screens/main/payment/Payment'
import Account from './screens/main/account/Account'
import colors from './constants/Colors'
 
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const Home_StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      // drawerIcon: ({ tintColor }) => (
      //   <Image
      //   source={require('./assets/images/homeIcon.png')}
      //   style={[styles.icon, { tintColor: tintColor }]}
      //   />),
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.appColor,
      },
      headerTintColor: colors.colorTextWhite,
    }),
  },
});
 
const History_StackNavigator = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: ({ navigation }) => ({
      title: 'History',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.appColor,
      },
      headerTintColor: colors.colorTextWhite,
    }),
  },
});
 
const Payment_StackNavigator = createStackNavigator({
  Payment: {
    screen: Payment,
    navigationOptions: ({ navigation }) => ({
      title: 'Payment',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.appColor,
      },
      headerTintColor: colors.colorTextWhite,
    }),
  },
});

const Account_StackNavigator = createStackNavigator({
  Account: {
    screen: Account,
    navigationOptions: ({ navigation }) => ({
      title: 'Account',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.appColor,
      },
      headerTintColor: colors.colorTextWhite,
    }),
  },
});
 
const DrawerUserNavigation = createDrawerNavigator({
  Home: {
    screen: Home_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  History: {
    screen: History_StackNavigator,
    navigationOptions: {
      drawerLabel: 'History',
    },
  }, 
  Payment: {
    screen: Payment_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Payment',
    },
  },
  Account: {
    screen: Account_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Account',
    },
  },
});
 
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default createAppContainer(DrawerUserNavigation);
  