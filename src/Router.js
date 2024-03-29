import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './screens/auth/login/Login';
import Signup from './screens/auth/signup/Signup';
import Home from './screens/main/home/Home'
import DrawerNavigation from './DrawerNavigation'

const RootStack = createStackNavigator(
    {
      Login: Login,
      Signup: Signup,
      DrawerNavigation: DrawerNavigation,
      Home: Home,
    },
    {
      initialRouteName: 'Login',
    }
  );
  
  const Router = createAppContainer(RootStack);
  
  export default Router;
