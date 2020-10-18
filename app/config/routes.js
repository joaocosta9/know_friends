import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home_screen';
import StartGame from '../screens/start_game';
import PassPlayer from '../screens/pass_player';
import AnswerQuestion from '../screens/answer_question'
import RoundStatistics from '../screens/statistics/round_statistics'
import FinalStatistics from '../screens/statistics/final_statistics'


const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StartGame" component={StartGame} />
        <Stack.Screen name="PassPlayer" component={PassPlayer} />
        <Stack.Screen name="AnswerQuestion" component={AnswerQuestion} />
        <Stack.Screen name="RoundStatistics" component={RoundStatistics} />
        <Stack.Screen name="FinalStatistics" component={FinalStatistics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
