import React from 'react';
import {
  Button,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

const TextInputPractice1 = () => {
  const 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style = {styles.container}>
        <TextInput style={styles.textInputStyle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
export default TextInputPractice1;
