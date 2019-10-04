import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Account from './screens/main/account/Account';
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
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const Account_StackNavigator = createStackNavigator({
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
});

const DrawerOwnerNavigation = createDrawerNavigator({
  Account: {
    screen: Account_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Account',
    },
  },
});

export default createAppContainer(DrawerOwnerNavigation);
