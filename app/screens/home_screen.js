import React, {Component} from 'react';

import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import BackgroundAnimation from '../components/background_animation';
import HighFive from '../assets/images/high_five.png'


//**************************************** STYLES ***************************************
import {styles} from '../assets/index';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <BackgroundAnimation/>
        <View style = {styles.align_center}>
          <Image style = {styles.high_five} source={HighFive}></Image>
          <Text style={styles.small_text}> Do you really know your friends?</Text>
          <TouchableOpacity
            style={styles.medium_button}
            onPress={() => this.props.navigation.navigate("StartGame")}>
            <Text style={[styles.center_text, styles.bold ]}>Play</Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.medium_button}
            onPress={() => console.log("how to play")}>
            <Text style={[styles.center_text, styles.bold]}>How to Play</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #008080;
`;
