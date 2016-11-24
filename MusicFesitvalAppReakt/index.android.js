/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Register from './register';
import Login from './login';
import Home from './home';

export default class MusicFestivalApp extends Component {

renderScene (route, navigator) {
  if (route.name == 'register') {
    return <Register navigator={navigator}/>
  }
  if (route.name == 'login') {
    return <Login navigator={navigator}/>
  }
  if (route.name == 'home') {
    return <Home navigator={navigator}/>
  }
}
  render() {
    return (
      <Navigator
        initialRoute={{name: 'register'}}  
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
 
AppRegistry.registerComponent('MusicFesitvalApp', () => MusicFestivalApp);
