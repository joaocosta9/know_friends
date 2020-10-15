import React, {Component} from 'react';
import {View} from 'react-native';
import {General, NSFW} from '../constants/questions';
import {connect} from 'react-redux';
import {start_game} from '../actions/game';

class AnswerQuestion extends React.Component {
  render() {
    const current_player_identifier =
      this.props.target_player == this.props.current_player
        ? 'you'
        : this.props.players_names[this.props.current_player];
    return <View contentContainerStyle={styles.main_container}>
    <Text style={[styles.big_text_blue, styles.bold, styles.text_center]}>
      {' '}
      Match Settings{' '}
    </Text></View>;
  }
}

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    current_player: state.gameReducer.current_player,
    players_names: state.gameReducer.players_names,
    target_player: state.gameReducer.target_player,
  };
};

export default connect(mapStateToProps)(AnswerQuestion);
