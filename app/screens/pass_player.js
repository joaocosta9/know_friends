//********************************* REACT NATIVE IMPORTS ********************************
import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, BackHandler} from 'react-native';

//********************************** EXTERNAL PACKAGES **********************************
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMobileAlt, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

//**************************************** STYLES ***************************************
import {styles} from '../assets/index';

//*************************************** GLOBALS ***************************************
class PassPlayer extends React.Component {

  //*************************************** HANDLERS **************************************
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      this.onBackPressed();
      return true;
    });
  }
  
  onBackPressed = () => {
    this.props.navigation.goBack();
    return true;
  };

  render() {
    //**************************************** RENDER ***************************************
    return (
      <ScrollView contentContainerStyle={styles.main_container}>
        <View style={[styles.small_margin, styles.align_center]}>
          <Text style={styles.big_text}>Pass phone to player</Text>
          <Text style={styles.big_text}>
            {this.props.players_names[this.props.current_player]}
          </Text>
          <View style={[styles.direction_row, styles.medium_margin]}>
            <FontAwesomeIcon size={300} icon={faMobileAlt} />
          </View>
          <TouchableOpacity
            style={styles.medium_button}
            onPress={() => this.props.navigation.replace('AnswerQuestion')}>
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
    current_player: state.gameReducer.current_player,
    players_names: state.gameReducer.players_names,
  };
};

export default connect(mapStateToProps)(PassPlayer);
