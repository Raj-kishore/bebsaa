import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const AtriInput = (props:any) => {
  // const [text, onChangeText] = React.useState('Type your email Id');
  const [number, onChangeNumber] = React.useState('');

  const {
    placeHolder
  } = props;

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        placeholder={placeHolder}
        // value={text}
      />
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:100, 
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AtriInput;