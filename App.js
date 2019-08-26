import React from 'react';

import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  Dimensions,
  StyleSheet
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
            <View style={styles.cabecalho}>
              <Image
                source={require('./resources/img/alura.jpg')}
                style={styles.fotoDePerfil} />
              <Text>{item.usuario}</Text>
            </View>
            <Image
              source={require('./resources/img/alura.jpg')}
              style={styles.foto} />
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width: screenWidth,
    height: screenWidth
  }
});

export default App;
