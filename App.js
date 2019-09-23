import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Router from './src/Router';
import DrawerNavigation from './src/DrawerNavigation';
//import History from './src/screens/main/history/History';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
          <DrawerNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
