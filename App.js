import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './src/PizzaTranslator'
import ButtonBasics from './src/ButtonBasics'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PizzaTranslator text='hoge' />
        <ButtonBasics />
      </View>
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
