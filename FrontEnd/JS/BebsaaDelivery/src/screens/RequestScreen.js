import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar, Text, Button } from 'react-native-paper';

export default function RequestScreen({ navigation }) {

    const handleSubmit = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'HistoryScreen' }],
        })
    }

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Request #id" />
                <Appbar.Action icon="calendar" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>
            <Text variant="headlineLarge">Commision amount</Text>
            <Text variant="titleLarge">From details</Text>
            <Text variant="bodyLarge">...</Text>

            <Text variant="titleLarge">To details</Text>
            <Text variant="bodyLarge">...</Text>
            <Button icon="camera" mode="contained" onPress={handleSubmit}>
                Enter OTP and submit
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#007aff',
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 16,
    },
    menuContainer: {
        flexDirection: 'row',
    },
    menuItem: {
        marginLeft: 16,
    },
    menuText: {
        color: '#ffffff',
        fontSize: 16,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
    },
});

