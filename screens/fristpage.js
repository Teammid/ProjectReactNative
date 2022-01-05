import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function fristpage({navigation}) {
    const [name, setname] = useState('');
    return (
        <View style = {styles.container}>
            <Text style = {styles.heading}>React Native Pass Value From One Screen</Text>
            <Text style = {styles.textStyle}>Plesase insert your name to pass it to second screen</Text>
            <TextInput style = {styles.inputStyle}
            placeholder='Enter you name'
            onChangeText={(name)=> setname(name)}
            />
            <Button
            title='Go next'
            onPress={()=>navigation.navigate('SecondPage',{Name: name})}
            />
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
    },
});