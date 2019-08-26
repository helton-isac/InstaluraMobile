import React from 'react';

import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default class Post extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image
                        source={require('../../resources/img/alura.jpg')}
                        style={styles.fotoDePerfil} />
                    <Text>{this.props.foto.usuario}</Text>
                </View>
                <Image
                    source={require('../../resources/img/alura.jpg')}
                    style={styles.foto} />
            </View>
        );
    };
}

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