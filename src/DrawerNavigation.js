import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import Home from './screens/main/home/Home';
import History from './screens/main/history/History'
import Payment from './screens/main/payment/Payment'



const DrawerNavigation = createDrawerNavigator({
    Home: Home,
    History: History,
    Payment: Payment,  
  });
  
 export default createAppContainer(DrawerNavigation);
  
  