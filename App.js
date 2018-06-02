import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './src/PizzaTranslator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PizzaTranslator text='hoge' />
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
