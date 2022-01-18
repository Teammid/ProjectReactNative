import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    const users = [
        {id:1,name:'Peach'},
        {id:2,name:'Jan'}
    ]
    return (
        <View>
            <Text style = {styles.title}>Thai Nichi Technology</Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}>{index+1} {user.name}</Text>
                })
            }
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    title: {
        fontSize:20,
    }
})
