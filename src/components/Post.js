import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export default class Post extends Component {
    render() {
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image
                        source={{ uri: this.props.foto.urlPerfil }}
                        style={styles.fotoDePerfil} />
                    <Text>{this.props.foto.loginUsuario}</Text>
                </View>
                <Image
                    source={{ uri: this.props.foto.urlFoto }}
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