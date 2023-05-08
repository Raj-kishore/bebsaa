import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar, Text, Button, List, MD3Colors } from 'react-native-paper';

export default function RequestScreen({ navigation }) {

    const handleClick = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'RequestScreen' }],
        })
    }

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Delivery details" />
            </Appbar.Header>
            <List.Section>
                <List.Subheader>List of requests</List.Subheader>
                <List.Item
                    onPress={handleClick}
                    title="Delivery #id" left={() => <List.Icon icon="folder" />} />
                <List.Item
                    title="Delivery #id"
                    left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
                />
            </List.Section>
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

