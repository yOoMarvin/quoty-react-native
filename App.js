import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quoty - your quote app.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  }
});
