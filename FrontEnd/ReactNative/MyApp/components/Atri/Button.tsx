import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';
const AtriButton = () => {
  const [text, onChangeText] = React.useState('Type your email Id');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <Button
        title="Login"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AtriButton;