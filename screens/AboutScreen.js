import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const AboutScreen = ({route}) => {
    const {email} = route.params;
    return (
        <View>
            <Text>เกี่ยวกับเรา</Text>
            <Text>Email:{email}</Text>
            
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({})
