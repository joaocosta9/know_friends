import React, {Component} from 'react';
import {View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {styles} from '../assets/index';

export default class PassPlayer {
  constructor() {
    this.state = {
      player_names: this.props.navigation.state.params.player_names,
      rounds: this.props.navigation.state.params.rounds,
      current_player: this.props.navigation.state.params.current_player,
    };
  }

  render() {
    return (
      <View style = {styles.main_container}>
        <Text>
          Pass phone to player {this.state.player_names[current_player]}
        </Text>
				<TouchableOpacity> 
					<Text> Continue </Text>
				</TouchableOpacity>
      </View>
    );
  }
}
