import React, { Component } from 'react';

import {
  SafeAreaView,
  FlatList
} from 'react-native';

import Post from './src/components/Post';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    };
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(response => response.json())
      .then(json => this.setState({ fotos: json }))
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={this.state.fotos}
          renderItem={({ item }) =>
            <Post foto={item} />
          }
        />
      </SafeAreaView>
    );
  };
}
