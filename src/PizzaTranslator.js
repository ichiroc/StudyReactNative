import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'fuga' }
  }

  // props の text を使う場合
  /* componentWillMount() {
   *   console.log('mounted!')
   *   this.setState(this.props)
   * } */

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          value={this.state.text}
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          onSubmit={console.log('submit')}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
