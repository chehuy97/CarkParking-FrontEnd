import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Router from './src/Router';
import DrawerUserNavigation from './src/DrawerUserNavigation';
import DrawerOnwerNavigation from './src/DrawerOwnerNavigation';
//import History from './src/screens/main/history/History';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerUserNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
