import React, {Component} from 'react';
import {View} from 'react-native';

export default class AnswerQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players_names: this.props.route.params.players_names,
      rounds: this.props.route.params.rounds,
      current_player: this.props.route.params.current_player,
      curr_round_results: this.props.route.params.curr_round_results,
      global_results: this.props.route.params.global_results,
    };
  }

  render() {
    return <View>

    </View>;
  }
}
