//********************************* REACT NATIVE IMPORTS ********************************
import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

//********************************** EXTERNAL PACKAGES **********************************
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faMinusCircle} from '@fortawesome/free-solid-svg-icons';

//**************************************** STYLES ***************************************
import {styles} from '../../assets/index';

//*************************************** GLOBALS ***************************************
export default class AddPlayer extends Component {
  //**************************************** SETUP ****************************************
  constructor() {
    super();
  }
  
  //**************************************** RENDER ***************************************
  render() {
    return (
      <View>
        <View style={[styles.medium_margin, styles.direction_row]}>
          <View style={styles.small_margin_top}>
            <FontAwesomeIcon size={30} icon={faUser} />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.first_input}
              onChangeText={(text) => {
                this.props.updateData(text, this.props.index);
              }}
              placeholder="Player name">
              {this.props.name}
            </TextInput>
          </View>
          <View style={styles.small_margin}>
            <FontAwesomeIcon
              size={30}
              icon={faMinusCircle}
              onPress={() => this.props.remove_player(this.props.index)}
            />
          </View>
        </View>
      </View>
    );
  }
}
