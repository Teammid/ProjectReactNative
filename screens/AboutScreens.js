import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreens = () => {
    return (
        <View style ={styles.container}>
            <Text>About Me</Text>
        </View>
    )
}

export default AboutScreens

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
