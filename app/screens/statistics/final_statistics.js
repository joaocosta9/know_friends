//********************************* REACT NATIVE IMPORTS ********************************
import React from 'react';
import {BackHandler, View} from 'react-native';

//********************************** EXTERNAL PACKAGES **********************************
import {connect} from 'react-redux';

//**************************************** STYLES ***************************************
import {styles} from '../../assets/index';

//*************************************** GLOBALS ***************************************
class FinalStatistics extends React.Component {
  //**************************************** SETUP ****************************************
  componentDidMount() {
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

  //*************************************** PARTIALS **************************************

  _render_player_points = (result, index) => {
    <View style={[styles.direction_row, styles.align_center]}>
      <Text>{result['player_name']}</Text>

      <Text style={styles.small_margin_left}> {results['points']} </Text>
    </View>;
  };
  //**************************************** RENDER ***************************************

  render() {
    return (
      <View style={[styles.small_margin, styles.align_center]}>
        {this.props.global_results.map(_render_player_points)}
      </View>
    );
  }
}

//**************************************** REDUX ****************************************
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    global_results: state.gameReducer.global_results,
  };
};

export default connect(mapStateToProps)(FinalStatistics);
