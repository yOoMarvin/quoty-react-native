import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuoteBox from './components/QuoteBox.js';
import TweetButton from './components/TweetButton.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quoty - your quote app.</Text>
        <QuoteBox />
        <View style={styles.buttonContainer}>
          <TweetButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#42f4a1',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  }
});
