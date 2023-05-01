import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'

import NextButton from '../components/Button'


export default function UploadDocScreen({ navigation }) {
    const [imageUri, setImageUri] = useState(null);
    const onNextPressed = () => {

        navigation.reset({
            index: 0,
            routes: [{ name: 'VerificationScreen' }],
        })
    }
    const pickImage = async () => {
        ImagePicker.launchImageLibrary({
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        }, (result) => {
            if (!result.cancelled) {
                setImageUri(result.uri);
            }
        });
    };

    const handleUpload = () => {
        // Handle uploading logic here
        console.log('Image uploaded!');
    };

    return (
        <Background>
            <BackButton goBack={navigation.goBack} />
            <Logo />
            <Header>Upload your documents</Header>
            <View style={styles.container}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
                        <Text style={styles.imagePlaceholderText}>Upload Adhaar front and back</Text>
                    </TouchableOpacity>
                )}

                {imageUri && (
                    <Button title="Upload" onPress={handleUpload} />
                )}
            </View>

            <View style={styles.container}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                ) : (
                    <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
                        <Text style={styles.imagePlaceholderText}>Upload PAN card</Text>
                    </TouchableOpacity>
                )}

                {imageUri && (
                    <Button title="Upload" onPress={handleUpload} />
                )}
            </View>
            <NextButton mode="contained" onPress={onNextPressed}>
                Submit
            </NextButton>
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
