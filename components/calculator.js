import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Calculator( {updateHistory, clearHistory} ) {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  

  const plusButtonPressed = () => {
    let result = parseFloat(number1) + parseFloat(number2);
    setResult(result);
    updateHistory(`${number1} + ${number2} = ${result}`);
  }
  const minusButtonPressed = () => {
    let result = parseFloat(number1) - parseFloat(number2);
    setResult(result);
    updateHistory(`${number1} - ${number2} = ${result}`);
  }
  const clear = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
    clearHistory();
  }

  return (
    <>
      <View style={styles.calculator}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={number1 => setNumber1(number1)}
            value={number1}
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={number2 => setNumber2(number2)}
            value={number2}
          />
        
          <View style={styles.buttonBar}>
            <Button onPress={plusButtonPressed} title='+' />
            <Button onPress={minusButtonPressed} title='-' />
            <Button onPress={clear} title='clear' />
          </View>
        </View>
        <Text style={styles.result}>Result: {result}</Text>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  calculator: {
    flex: 2,
  },
  historyBar: {
    flex: 4,
  },
  
  result: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  input: {
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1, 
    color: '#fff', 
    margin: 3,
  },
  inputs: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 202,
  },
  buttonBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  history: {
    color: '#fff',
    fontSize: 20,
  },
  historyItem: {
    color: '#fff',
    fontSize: 12,
  },
});
