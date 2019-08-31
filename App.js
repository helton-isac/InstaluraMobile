import React, { Component } from 'react';

import {
  SafeAreaView,
  FlatList
} from 'react-native';

import Post from './src/components/Post';
import sampleData from './SampleData.json';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    };
  }

  componentDidMount() {
    const useSample = true;
    if (!useSample) {
      fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
        .then(response => response.json())
        .then(json => this.setState({ fotos: json }))
        .catch(e => {
          console.warn('Não foi possível carregar as fotos: ' + e);
          this.setState({ status: 'ERRO' })
        });
    } else {
      this.setState({ fotos: sampleData });
    }
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
