import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Calculator from './components/calculator';
import History from './components/history';

export default function App() {
  const [history, setHistory] =useState([]);

  const updateHistory = (calculation) => {
    setHistory([...history, calculation]);
  }
  const clearHistory = () => {
    setHistory([])
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>CALCULATOR</Text>
        <Text style={styles.info}>Fill in numbers and press the desired function. Use '.' for decimal separator</Text>
      </View>
      <Calculator updateHistory={updateHistory} clearHistory={clearHistory}></Calculator>
      <History history={history}></History>
      <StatusBar style="auto" />
    </View>
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
  topBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 25,
    color: '#fff',
  },
  info: {
    color: '#eee',
    fontStyle: 'italic'
  },
});
