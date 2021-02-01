import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function History( {history} ) {
  return (
    <>
      <View style={styles.historyBar}>
        <Text style={styles.history}>History:</Text>
        <FlatList
          data={history}
          renderItem={({item}) => {
            return <Text style={styles.historyItem}>{item}</Text>;
            }
          }
          keyExtractor={(item, index) => index.toString()} //voi käyttää indexiä avaimena, koska listan järjestys ei koskaan muutu
        />
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  historyBar: {
    flex: 4,
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
