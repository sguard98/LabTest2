import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName={'ListScreen'}>
      <Stack.Navigator>
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
