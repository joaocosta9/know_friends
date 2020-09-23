//********************************* REACT NATIVE IMPORTS ********************************
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';

//********************************** EXTERNAL PACKAGES **********************************
import Slider from '@react-native-community/slider';
import AddPlayer from '../components/add_player/add_player';

//**************************************** STYLES ***************************************
import {styles} from '../assets/index';

//*************************************** GLOBALS ***************************************
export default class StartGame extends Component {
  //**************************************** SETUP ****************************************
  constructor() {
    super();
    this.state = {
      rounds: 1,
      players_names: [],
    };
  }

  //*************************************** HANDLERS **************************************
  remove_players(index) {
    let players_names = this.state.players_names;
    players_names.splice(index, 1);
    this.setState({players_names: players_names});
  }

  add_players() {
    let players_names = this.state.players_names;
    players_names.push('');
    this.setState({players_names: players_names});
  }

  updateData = (data, index) => {
    let players_names = this.state.players_names;
    players_names[index] = data;
    this.setState({players_names: players_names});
  };

  start_game() {
    if (this.state.players_names.includes('')) {
      Alert.alert('Players names cannot be empty');
    } else {
      this.props.navigation.navigate('PassPlayer', {
        players_names: this.state.players_names,
        rounds: this.state.rounds,
        current_player: 0,
      });
    }
  }

  //**************************************** RENDER ***************************************
  render() {
    return (
      <ScrollView contentContainerStyle={styles.main_container}>
        <Text style={[styles.big_text_blue, styles.bold, styles.text_center]}>
          {' '}
          Match Settings{' '}
        </Text>
        <View style={styles.medium_margin}>
          <Text> Questions </Text>
        </View>
        <Text style={styles.medium_margin}>Rounds {this.state.rounds} </Text>
        <Slider
          style={{width: 300, height: 40}}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={this.state.rounds}
          onValueChange={(value) => this.setState({rounds: value})}
          thumbTintColor="#307ecc"
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
        />
        <Text style={styles.medium_margin}> Players</Text>
        {this.state.players_names.map((item, index) => {
          return (
            <AddPlayer
              index={index}
              name={item}
              updateData={(val, index) => this.updateData(val, index)}
              remove_player={(index) => this.remove_players(index)}
            />
          );
        })}
        <View style={styles.align_center}>
          <TouchableOpacity
            style={[styles.medium_button, styles.small_margin]}
            onPress={() => this.add_players()}>
            <Text style={[styles.center_text, styles.bold]}>Add Player</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.medium_button}
            onPress={() => this.start_game()}>
            <Text style={[styles.center_text, styles.bold]}>Start Game</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
