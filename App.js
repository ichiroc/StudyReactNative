import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './src/PizzaTranslator'
import ButtonBasics from './src/ButtonBasics'
import Touchables from './src/Touchables'
import Scrollable from './src/Scrollable'

export default class App extends React.Component {
  render() {
    return (
      <Scrollable />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
