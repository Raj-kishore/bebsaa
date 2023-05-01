import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'



export default function UploadDocScreen({ navigation }) {

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Your document verification is in progress</Header>

        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    imagePlaceholder: {
        width: 200,
        height: 200,
        backgroundColor: '#eaeaea',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholderText: {
        fontSize: 16,
        color: '#AAA',
    },
});
