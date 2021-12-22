import React , {useState} from 'react';
import {
  Button,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

const TouchablePractice =() =>{
const [Emaill,setEmail]=useState('')
const [pass,setPass]=useState('')
const check =()=>{
    alert ('email'+Emaill+'\npass'+pass)
}
    return(
        <SafeAreaView style = {{flex:1}}>
            <View style = {styles.container}>
                <TextInput
                placeholder = "Emaill"
                onChangeText=  {(Emaill) => setEmail (Emaill)}

                />
                 <View>
                 <TextInput
                placeholder = "Pass"
                onChangeText=  {(pass) => setPass (pass)}/>
                 </View>

                 <TouchableOpacity style = {{backgroundColor : "pink"}} 
                
                activeOpacity = {0.25}
                onPress = {check}
                >
                    <View />
                    <Text> Submit </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

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
export default TouchablePractice;