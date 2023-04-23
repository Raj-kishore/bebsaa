import React, { type PropsWithChildren, useState, useRef, Fragment } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { RadioButton, Button, Text } from 'react-native-paper';

import AtriInput from './components/Atri/Input';
import AtriButton from './components/Atri/Button';

import styles from './styles/global';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



const App = () => {
  const [value, setValue] = React.useState('4');


  return (
    <NavigationContainer>
      {/* <SafeAreaView style={styles.container}>
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
          <Button mode="contained" onPress={() => console.log('Pressed')}>
            Next
          </Button>
        </View>
      </SafeAreaView> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

interface navigationProps {
  navigation: any;
}
const HomeScreen = ({ navigation }: navigationProps) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default App;
