import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack'
import Login from './screens/auth/login/Login';
import Signup from './screens/auth/signup/Signup';
import Home from './screens/main/home/Home';
import DrawerUserNavigation from './DrawerUserNavigation';
import DrawerOnwerNavigation from './DrawerOwnerNavigation';

const RootStack = createSwitchNavigator(
  {
    Login: Login,
    Signup: Signup,
    DrawerUser: DrawerUserNavigation,
    DrawerOnwer: DrawerOnwerNavigation,
  },
  {
    initialRouteName: 'Login',
  },
);

const Router = createAppContainer(RootStack);

export default Router;
