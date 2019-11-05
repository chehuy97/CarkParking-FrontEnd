import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/main/home/Home';
import Search from './screens/main/search/Search';
//import Home_StackNavigator from './screens/main/home/Home_Navigator'
import History from './screens/main/history/History';
import Payment from './screens/main/payment/Payment';
import Account from './screens/main/account/Account';
import AccountEdit from './screens/main/account/AccountEdit';
import AccountCar from './screens/main/account/AccountCar';
import Booking from './screens/main/booking/Booking';
import colors from './constants/Colors';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./assets/images/drawer.png')}
            style={{width: 30, height: 30, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Home_StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        title: 'Home',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: colors.appColor,
        },
        headerTintColor: colors.colorTextWhite,
      }),
    },
    Booking: {
      screen: Booking,
      navigationOptions: ({navigation}) => ({
        title: 'Booking',
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
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: colors.appColor,
        },
        headerTintColor: colors.colorTextWhite,
      }),
    },
  },
  {
    initialRouteName: 'Booking',
  },
);

const History_StackNavigator = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: ({navigation}) => ({
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
    navigationOptions: ({navigation}) => ({
      title: 'Payment',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: colors.appColor,
      },
      headerTintColor: colors.colorTextWhite,
    }),
  },
});

const Account_StackNavigator = createStackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: ({navigation}) => ({
        title: 'Account',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: colors.appColor,
        },
        headerTintColor: colors.colorTextWhite,
      }),
    },
    AccountEdit: {
      screen: AccountEdit,
      navigationOptions: ({navigation}) => ({
        title: 'Edit Account',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: colors.appColor,
        },
        headerTintColor: colors.colorTextWhite,
      }),
    },
    AccountCar: {
      screen: AccountCar,
      navigationOptions: ({navigation}) => ({
        title: 'Account Car',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: colors.appColor,
        },
        headerTintColor: colors.colorTextWhite,
      }),
    },
  },
  {
    initialRouteName: 'Account',
  },
);

const DrawerUserNavigation = createDrawerNavigator(
  {
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
    Account: {
      screen: Account_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Account',
      },
    },
    Payment: {
      screen: Payment_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Payment',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(DrawerUserNavigation);
