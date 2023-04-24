/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider, RadioButton } from 'react-native-paper';
import { theme } from './src/core/theme'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  LocationChooseScreen,
  FullNameScreen,
  UploadImageScreen,
} from './src/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'yellow',
//   },
// };

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="LocationChooseScreen" component={LocationChooseScreen} />
          <Stack.Screen name="FullNameScreen" component={FullNameScreen} />
          <Stack.Screen name="UploadImageScreen" component={UploadImageScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );

  // return (
  //   <PaperProvider theme={theme}>
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         <Stack.Screen
  //           name="Home"
  //           component={HomeScreen}
  //           options={{ title: 'Welcome to Delivery App' }}
  //         />
  //         <Stack.Screen name="Profile" component={ProfileScreen} />
  //         <Stack.Screen name="Login" component={LoginScreen} />

  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </PaperProvider>
  // );
}


// const HomeScreen = ({ navigation }: { navigation: any }) => {
//   const [value, setValue] = React.useState('1');
//   return (
//     <SafeAreaView>
//       <View>
//         <Text >Choose your location</Text>
//         <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
//           <RadioButton.Item label="Mumbai" value="1" />
//           <RadioButton.Item label="Bengaluru" value="2" />
//           <RadioButton.Item label="Delhi/NCR" value="3" />
//           <RadioButton.Item label="Hyderabad" value="4" />
//           <RadioButton.Item label="Ahmedabad" value="5" />
//           <RadioButton.Item label="Chennai" value="6" />
//           <RadioButton.Item label="Kolkata" value="7" />
//           <RadioButton.Item label="Surat" value="8" />
//           <RadioButton.Item label="Pune" value="9" />
//           <RadioButton.Item label="Goa" value="10" />
//           <RadioButton.Item label="Chandigarh" value="11" />
//         </RadioButton.Group>
//         <Button
//           title="Register"
//           onPress={() =>
//             navigation.navigate('Login', { name: 'Jane' })
//           }
//         />
//       </View>
//     </SafeAreaView>

//   );
// };
// const ProfileScreen = ({ navigation, route }: { navigation: any, route: any }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };
// const LoginScreen = ({ navigation, route }: { navigation: any, route: any }) => {
//   return <Text>This is login screen</Text>;
// };

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
