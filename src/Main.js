import React, { Component } from 'react';
import { View } from 'react-native';
import RouterComponent from './RouterComponent';
import Header from './component/headers/Header'

export default class Main extends Component {
  render() {
    return (
      <View style={{ flex : 1 }}>
      <Header />
        <RouterComponent />
      </View>
    );
  }
}