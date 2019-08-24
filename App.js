import React from 'react';

import {
  View,
  SafeAreaView,
  ScrollView,
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
      <ScrollView>
        {fotos.map(foto =>
          <View key={foto.id}>
            <Text>{foto.usuario}</Text>
            <Image
              source={require('./resources/img/alura.jpg')}
              style={{ width: screenWidth, height: screenWidth }} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
