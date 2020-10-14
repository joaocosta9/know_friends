import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMobileAlt, faArrowRight} from '@fortawesome/free-solid-svg-icons';

import {styles} from '../assets/index';

export default class PassPlayer extends React.Component {

  onBackPressed = () => {
    console.log("i want to be alone")
    this.props.navigation.goBack();
    return true;
  };

  render() {
    const params = this.props.route.params;
    return (
      <ScrollView contentContainerStyle={styles.main_container}>
        <View style={[styles.small_margin, styles.align_center]}>
          <Text style={styles.big_text}>Pass phone to player</Text>
          <Text style={styles.big_text}>
            {params.players_names[params.current_player]}
          </Text>
          <View style={[styles.direction_row, styles.medium_margin]}>
            <FontAwesomeIcon size={300} icon={faMobileAlt} />
          </View>
          <TouchableOpacity
            style={styles.medium_button}
            onPress={() =>
              this.props.navigation.replace('AnswerQuestion', {
                players_names: params.players_names,
                rounds: params.rounds,
                current_player: params.current_player,
                curr_round_results: params.curr_round_results,
                global_results: params.global_results,
              })
            }>
            <Text style={[styles.center_text, styles.bold]}> Continue </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
