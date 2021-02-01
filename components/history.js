import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function History( {route, navigation } ) {
  const { history } = route.params;
  console.log({history});
  return (
    <View style={styles.container}>
      <View style={styles.historyBar}>
        <Text style={styles.history}>History:</Text>
        <FlatList
          data={history.history}
          renderItem={({item}) => {
            return <Text style={styles.historyItem}>{item}</Text>;
            }
          }
          keyExtractor={(item, index) => index.toString()} //voi käyttää indexiä avaimena, koska listan järjestys ei koskaan muutu
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
