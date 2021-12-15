import React,{useState,useEffect} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    const users = [
        {id:1,name:'Peach'},
        {id:2,name:'Jan'}
    ]

    const [count,setCount] = useState(0);
    const [title,setTitle] = useState('Hello');

    // update alway
    useEffect (()=>{
        console.log('use effect1')
    })

    //ทำงานเเค่รอบเดียว เช่น การเรียกข้อมูลจาก backend
    useEffect (()=>{
        console.log('use effect2')
    },[])

    //จะทำเมื่อตัวเเปรใน []
    useEffect (()=>{
        console.log('use effect3')
    },[title])

    return (
        <View>
            <Text style = {styles.title}>Thai Nichi Technology {count}
            </Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}>{index+1} {user.name}</Text>
                })
            }
            <Button title ='กด' 
            onPress = {()=>{
               // setCount(5)
                setCount(count+1)
            }}
            />
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    title: {
        fontSize:20,
    }
})
