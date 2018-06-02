import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './src/PizzaTranslator'
import ButtonBasics from './src/ButtonBasics'
import Touchables from './src/Touchables'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PizzaTranslator text='hoge' />
        <ButtonBasics />
        <Touchables />
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
