import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Account_Navigator from '../main/account/Account_Navigator'
import History_Navigator from '../main/history/History_Navigator'
import Home_Navigator from '../main/home/Home_Navigator'
import Payment_Navigator from '../main/payment/Payment_Navigator'
import dimens from '../../constants/Dimens'
const DrawerConfig = {
    drawerWidth: dimens.DEVICE_WIDTH*0.7,
    // contentComponent: ({ navigation }) => {
    //     return(<MenuDrawer navigation={navigation} />)
    // }
}
const DrawerNavigator = createDrawerNavigator({
    Account_Navigator: {
        screen: Account_Navigator
    },
    History_Navigator: {
        screen: History_Navigator
    },
    Home_Navigator: {
        screen: Home_Navigator
    },
    Payment_Navigator: {
        screen: Payment_Navigator
    }
}, DrawerConfig)

export default createAppContainer(DrawerNavigator)