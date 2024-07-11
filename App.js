// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import DiagramScreen from './screens/DiagramScreen';
import MiniGameScreen from './screens/MiniGameScreen';
import Qscreen from './screens/Qscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Diagram" component={DiagramScreen} />
        <Stack.Screen name="MiniGame" component={MiniGameScreen} />
        <Stack.Screen name="Qscreen" component={Qscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
