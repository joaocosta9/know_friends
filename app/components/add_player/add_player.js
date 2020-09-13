import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../../assets/index';

export default class AddPlayer extends Component {
  constructor() {
    super();
    this.state = {
      remove: false,
      name: ""
    };
  }

  removeplayer(){
    console.log("im going to remove" + this.props.index)
    this.setState({remove: true})
    this.props.remove_player(this.props.index)
  }
  render() {
    console.log("renderizei " + this.props.index + " neste momento estou " + this.state.remove)
    if (this.state.remove == false) {
      return (
        <View>
          <View style={[styles.medium_margin, styles.direction_row]}>
            <View style={styles.small_margin_top}>
              <FontAwesomeIcon size={30} icon={faUser} />
            </View>
            <View style={styles.container}>
              <TextInput
                style={styles.first_input}
                onChangeText={(text) => {this.props.updateData(text, this.props.index);}}
                placeholder="Player name"></TextInput>
            </View>
            <View style={styles.small_margin}>
              <FontAwesomeIcon
                size={30}
                icon={faMinusCircle}
                onPress={() => this.removeplayer()}
              />
            </View>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}
