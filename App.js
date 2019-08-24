import React from 'react';

import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

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
          <View>
            <Text>{item.usuario}</Text>
            <Image
              source={require('./resources/img/alura.jpg')}
              style={{ width: screenWidth, height: screenWidth }} />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default App;
