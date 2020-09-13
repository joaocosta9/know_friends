/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  Component
} from 'react';
import {
  View,
  Text,
} from 'react-native';

import BackgroundAnimation from './app/components/background_animation';

//**************************************** STYLES ***************************************
import { styles } from "./app/assets/index";

import StackNavigator from "./app/config/routes"


export default class App extends Component {
  render() {
    return ( 
    <View style={styles.container}>
      <StackNavigator/>
    </View>
    );
  }
}