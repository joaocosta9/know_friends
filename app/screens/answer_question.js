//********************************* REACT NATIVE IMPORTS ********************************
import React, {Component} from 'react';
import {View, Text} from 'react-native';

//********************************** EXTERNAL PACKAGES **********************************
import {connect} from 'react-redux';

//**************************************** STYLES ***************************************
import {styles} from '../assets/index';

//*************************************** GLOBALS ***************************************
import {General, NSFW} from '../constants/questions';
import {change_question} from '../actions/game';

class AnswerQuestion extends React.Component {
  //**************************************** SETUP ****************************************
  componentDidMount() {
    if (this.props.target_player == this.props.current_player) {
      var question;
      if (this.props.category == 'General') {
        question = General[Math.floor(Math.random() * General.length)];
      } else if (this.props.category == 'NSFW') {
        question = NSFW[Math.floor(Math.random() * NSFW.length)];
      }
      this.props.dispatch(change_question(question));
    }
  }

  //*************************************** PARTIALS **************************************
  _render_question_option = (item, index) => {
    return (
      <Text style={[styles.big_text_blue, styles.bold, styles.text_center]}>
      {' '}
      {item}{' '}
    </Text>
    );
  }

  //**************************************** RENDER ***************************************
  render() {
    const current_player_identifier =
      this.props.target_player == this.props.current_player
        ? 'You'
        : this.props.players_names[this.props.current_player];
    return (
      <View contentContainerStyle={styles.main_container}>
        <Text style={[styles.big_text_blue, styles.bold, styles.text_center]}>
          {' '}
          What Would {current_player_identifier} Choose{' '}
        </Text>
        <Text style={[styles.big_text_blue, styles.bold, styles.text_center]}>
          {' '}
          {this.props.current_question.question}{' '}
        </Text>

        {this.props.current_question.options.map(this._render_question_option)}
      </View>
    );
  }
}

//**************************************** REDUX ****************************************
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    current_player: state.gameReducer.current_player,
    players_names: state.gameReducer.players_names,
    target_player: state.gameReducer.target_player,
    current_question: state.gameReducer.current_question,
    category: state.gameReducer.category
  };
};

export default connect(mapStateToProps)(AnswerQuestion);
