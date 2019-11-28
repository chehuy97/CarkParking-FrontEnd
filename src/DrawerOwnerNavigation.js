import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Yard from './screens/main/yard/Yard';
import Account from './screens/main/account/Account';
import colors from './constants/Colors';
import AccountEdit from './screens/main/account/AccountEdit';
import AccountCar from './screens/main/account/AccountCar';
import History from './screens/main/history/HistoryYard';

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
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
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

const Yard_StackNavigator = createStackNavigator({
  Yard: {
    screen: Yard,
    navigationOptions: ({navigation}) => ({
      title: 'Yard',
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

const DrawerOwnerNavigation = createDrawerNavigator(
  {
    Account: {
      screen: Account_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Account',
      },
    },
    Yard: {
      screen: Yard_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Yard',
      },
    },
    History: {
      screen: History_StackNavigator,
      navigationOptions: {
        drawerLabel: 'History',
      },
    },
  },
  {
    initialRouteName: 'Yard',
  },
);

export default createAppContainer(DrawerOwnerNavigation);
