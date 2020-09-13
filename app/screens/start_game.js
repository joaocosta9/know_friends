import React, {Component} from 'react';

import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import AddPlayer from '../components/add_player/add_player';

//**************************************** STYLES ***************************************
import {styles} from '../assets/index';

export default class StartGame extends Component {
  constructor() {
    super();
    this.state = {
      rounds: 1,
      players_names: [],
      clicked_add_player: false,
    };
  }

  remove_players(index){
    let players_names = this.state.players_names
    players_names.splice(index, 1)
    console.log(players_names)
    this.setState({players_names: players_names})
  }

  add_players(){
    let players_names = this.state.players_names
    players_names.push("")
    console.log(players_names)
    this.setState({players_names: players_names})
  }

  updateData = (data, index) => {
    let players_names = this.state.players_names
    players_names[index] = data
    this.setState({players_names: players_names})
  }

  render() {
    console.log(this.state.players_names.length);
    var add_players = [];
    for (let i = 0; i < this.state.players_names.length; i++) {
      console.log("pushei " + i)
      add_players.push(<AddPlayer index = {i} updateData={( val,index) => this.updateData(val, index)} remove_player = {(index) =>  this.remove_players(index)} />);
    }
    return (
      <ScrollView contentContainerStyle={styles.main_container}>
        {/* <View style={styles.main_container}> */}
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
          {add_players}
          <View style={styles.align_center}>
            <TouchableOpacity
              style={[styles.medium_button, styles.small_margin]}
              onPress={() => this.add_players()}>
              <Text style={[styles.center_text, styles.bold]}>Add Player</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.medium_button}
              onPress={() => console.log('how to play')}>
              <Text style={[styles.center_text, styles.bold]}>Start Game</Text>
            </TouchableOpacity>
          </View>
        {/* </View> */}
      </ScrollView>
    );
  }
}