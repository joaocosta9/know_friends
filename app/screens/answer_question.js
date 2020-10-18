//********************************* REACT NATIVE IMPORTS ********************************
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//********************************** EXTERNAL PACKAGES **********************************
import {connect} from 'react-redux';

//**************************************** STYLES ***************************************
import {styles} from '../assets/index';

//*************************************** GLOBALS ***************************************
import {General, NSFW} from '../constants/questions';
import {
  change_question,
  insert_correct_answer,
  insert_answer,
} from '../actions/game';

class AnswerQuestion extends React.Component {
  //**************************************** SETUP ****************************************
  constructor() {
    super();
    this.state = {
      current_player: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({
      current_player:
        this.props.curr_round_correct_answer == ''
          ? 'You'
          : this.props.players_names[this.props.target_player],
    });
    if (this.props.curr_round_results.length == 0) {
      var question;
      if (this.props.category == 'General') {
        question = General[Math.floor(Math.random() * General.length)];
      } else if (this.props.category == 'NSFW') {
        question = NSFW[Math.floor(Math.random() * NSFW.length)];
      }
      this.props.dispatch(change_question(question));
    }
  }

  //*************************************** HANDLERS **************************************

   async sumbit_answer(answer) {
    this.setState({isLoading: true})
    if (this.props.curr_round_correct_answer == '') {
      await this.props.dispatch(insert_correct_answer(answer));
      //replace
    } else {
      await this.props.dispatch(insert_answer(this.props.current_player, answer));
    }

    if (
      this.props.curr_round_results.length ==
      this.props.players_names.length - 1
    ) {
      this.props.navigation.replace('RoundStatistics');
    } else {
      this.props.navigation.replace('PassPlayer');
    }
  }

  //*************************************** PARTIALS **************************************
  _render_question_option = (item, index) => {
    return (
      <TouchableOpacity
        style={styles.big_button}
        onPress={() => this.sumbit_answer(item)}
        disabled={this.state.isLoading}>
        <Text style={[styles.center_text, styles.bold]}> {item} </Text>
      </TouchableOpacity>
    );
  };

  //**************************************** RENDER ***************************************
  render() {
    return (
      <View style={[styles.main_container, styles.align_center]}>
        <Text style={[styles.big_text_blue, styles.bold, styles.text_center]}>
          {' '}
          What Would {this.state.current_player} Choose{' '}
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
    current_question: state.gameReducer.current_question,
    category: state.gameReducer.category,
    target_player: state.gameReducer.target_player,
    curr_round_correct_answer: state.gameReducer.curr_round_correct_answer,
    curr_round_results: state.gameReducer.curr_round_results,
  };
};

export default connect(mapStateToProps)(AnswerQuestion);
