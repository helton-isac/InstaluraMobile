import React from 'react';

import {
  SafeAreaView,
  FlatList
} from 'react-native';

import Post from './src/components/Post';

const App = () => {

  const fotos = [
    { id: 1, usuario: 'rafael' },
    { id: 2, usuario: 'alberto' },
    { id: 3, usuario: 'vitor' }
  ];

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={fotos}
        renderItem={({ item }) =>
          <Post foto={item} />
        }
      />
    </SafeAreaView>
  );
};

export default App;
