import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Calculator from './components/calculator';
import History from './components/history';

export default function App() {
  

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Calculator' component={Calculator} />
        <Stack.Screen name='History' component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
