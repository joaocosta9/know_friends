//********************************* REACT NATIVE IMPORTS ********************************
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

//********************************** EXTERNAL PACKAGES **********************************
import {connect} from 'react-redux';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

//**************************************** STYLES ***************************************
import {styles} from '../../assets/index';

//*************************************** GLOBALS ***************************************
import {change_question_owner, increment_curr_round} from '../../actions/game';

class RoundStatistics extends React.Component {
  //**************************************** SETUP ****************************************
  componentDidMount() {
    if(this.props.players_names.length - 1 == this.props.target_player){
      this.props.dispatch(increment_curr_round());
    }
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.onBackPressed();
      return true;
    });
  }

  //*************************************** HANDLERS **************************************
  onBackPressed = () => {
    this.props.navigation.goBack();
    return true;
  };

  change_screen() {
    if (this.props.current_round == this.props.rounds) {
      this.props.navigation.replace('FinalStatistics');
    } else {
      this.props.dispatch(change_question_owner());
      this.props.navigation.replace('PassPlayer');
    }
  }

  //*************************************** PARTIALS **************************************

  _player_result = (result, index) => {
    return (
      <View style={[styles.direction_row, styles.align_center]}>
        <Text>{result['player_name']}</Text>
        {result['answer_is_right'] && (
          <FontAwesomeIcon
            style={styles.small_margin_left}
            icon={faCheckCircle}
            size={45}
            color={'green'}></FontAwesomeIcon>
        )}
        {result['answer_is_right'] == false && (
          <FontAwesomeIcon
            style={styles.small_margin_left}
            icon={faTimesCircle}
            size={45}
            color={'red'}></FontAwesomeIcon>
        )}
      </View>
    );
  };

  render() {
    //**************************************** RENDER ***************************************
    return (
      <ScrollView contentContainerStyle={styles.main_container}>
        <View style={[styles.small_margin, styles.align_center]}>
          <Text style={styles.big_text}>Round Results</Text>
          <View>{this.props.curr_round_results.map(this._player_result)}</View>
          <TouchableOpacity
            style={styles.medium_button}
            onPress={() => this.change_screen()}>
            <Text style={[styles.center_text, styles.bold]}> Continue </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

//**************************************** REDUX ****************************************
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    curr_round_results: state.gameReducer.curr_round_results,
    current_round: state.gameReducer.current_round,
    rounds: state.gameReducer.rounds,
    players_names: state.gameReducer.players_names,
    target_player: state.gameReducer.target_player
  };
};

export default connect(mapStateToProps)(RoundStatistics);
