
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { List, ListItem, Radio, Text, RadioButton, Button } from 'react-native-paper';
import Background from '../components/Background'



export default function LocationChooseScreen({ navigation }) {

    const [value, setValue] = React.useState('4');

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text variant="displaySmall">Choose your location</Text>
                    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                        <RadioButton.Item label="Mumbai" value="1" />
                        <RadioButton.Item label="Bengaluru" value="2" />
                        <RadioButton.Item label="Delhi/NCR" value="3" />
                        <RadioButton.Item label="Hyderabad" value="4" />
                        <RadioButton.Item label="Ahmedabad" value="5" />
                        <RadioButton.Item label="Chennai" value="6" />
                        <RadioButton.Item label="Kolkata" value="7" />
                        <RadioButton.Item label="Surat" value="8" />
                        <RadioButton.Item label="Pune" value="9" />
                        <RadioButton.Item label="Goa" value="10" />
                        <RadioButton.Item label="Chandigarh" value="11" />
                    </RadioButton.Group>
                    <Button mode="contained" onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'FullNameScreen' }],
                        })
                    }}>
                        Next
                    </Button>
                </View>
            </SafeAreaView>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
});

