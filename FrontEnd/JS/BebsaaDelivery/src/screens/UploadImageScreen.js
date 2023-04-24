import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default function UploadImageScreen() {
    const [imageUri, setImageUri] = useState(null);

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
        <View style={styles.container}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
                <TouchableOpacity onPress={pickImage} style={styles.imagePlaceholder}>
                    <Text style={styles.imagePlaceholderText}>Choose an image</Text>
                </TouchableOpacity>
            )}

            {imageUri && (
                <Button title="Upload" onPress={handleUpload} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    imagePlaceholder: {
        width: 200,
        height: 200,
        backgroundColor: '#EEE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholderText: {
        fontSize: 16,
        color: '#AAA',
    },
});
