import React from 'react';

import {
  SafeAreaView,
  Text,
  Image,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <Image
        source={require('./resources/img/alura.jpg')}
        style={{ width: screenWidth, height: screenWidth }} />
    </SafeAreaView>
  );
};

export default App;
