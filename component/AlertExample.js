import React from 'react'
import { StyleSheet, 
    Text, 
    View,
    Alert,
    SafeAreaView,
    Button } 
    from 'react-native'

const AlertExample = () => {
    const simpleAlert = ()=>{
        alert ('Hello I am Venom!!')
    }

    const TwoOption =()=>{
        Alert.alert(
            'Hello',
            'You Are Spiderman ?',
            [
                {
                    text:'Yes',
                    onPress : ()=>console.log('Yes')
                },
                {
                    text:'No',
                    onPress : ()=>console.log('No')
                }
            ],
            {cancelable:true}
        )
    }

    const ThreeOption =()=>{
        Alert.alert(
            'Hello',
            'You Are Iron Man ?',
            [

                {
                    text:'May Be',
                    onPress : ()=>console.log('May Be')
                },
                {
                    text:'Yes',
                    onPress : ()=>console.log('Yes')
                },
                {
                    text:'No',
                    onPress : ()=>console.log('No')
                }
               
            ],
            {cancelable:true}
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
             <View style = {styles.container}>
            <Button
            title = 'Simple Alert' onPress = {simpleAlert}
            />

            <Button
            title = 'Alert With Two Option' onPress = {TwoOption}
            />

            <Button
            title = 'Alert With Three Option' onPress = {ThreeOption}
            />  
            </View>
        </SafeAreaView>
    )
}

export default AlertExample

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    },
    });
