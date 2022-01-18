import React, { useState } from 'react';
import { 
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput
  } from 'react-native';

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
    },
    input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
    },
    });


     const TextInputReview = () => {
        //UseState
        const [text, onChangeText] = useState('');
      
        return (
          <SafeAreaView style={styles.container}>
            <Text style={{color: 'blue'}}>{text}</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </SafeAreaView>
        );
      };
      export default TextInputReview;