import React, { useState } from 'react';
import { useMemo,useCallback } from 'react'; 
import { 
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  Useless,
  TextInput
} from 'react-native';
//import {View, Text} from 'react-native'

// Props

/* const Greeting = ({name})=>{
 // const {name} = props;
  return (
    <View style = {{alignItems:'center'}}>
    <Text>Hello {name}</Text>
    </View>
  );
};

const Choco = () => {
  return (
    <View style ={{alignItems:'center',top:50}}>
      <Greeting name ="Marry Christms"/>
      <Greeting name ="Happy New Year"/>
    </View>
    
  );
};
export default Choco; */

//Props Ex

/* const Show = ({fName1,lname1})=>{
  // const {name} = props;
   return (
     <View style = {{alignItems:'center'}}>
     <Text>You FirstName is {fName1} ! and Lastname is {lname1}</Text>
     </View>
   );
 };
 
 const Choco = () => {
   return (
     <View style ={{alignItems:'center',flex:1, justifyContent:'center'}}>
       <Show fName1 ="Nantakorn" lname1 ="คุณมี"/>
       <Show fName1 ="Sirapong" lname1 ="จุ้ยมณี"/>
     </View>
     
   );
 };
 export default Choco; */

 



/*  const styles = StyleSheet.create({
   container: {
   flex: 1,
   backgroundColor: '#66CCFF',
   padding: 10,
   },
   countContainer: {
   flexDirection: 'row',
   margin: 30,
   justifyContent: 'space-between',
   alignItems: 'center',
   },
   countNumber: {
   fontSize: 20,
   fontWeight: 'bold',
   color: 'red'
   }
  });
 */
  // REACT HOOK
/*   const App = ()=>{
    const [number,setNumber] = useState(0);
    const randomNumber = Math.random();
    return (
      <View style ={styles.container}>
        <View style = {styles.countContainer}>
          <Button title="Down" onPress={()=>setNumber(number-1)}/>
          <Text>{number}</Text>
          <Button title="Up" onPress={()=>setNumber(number+1)}/>
        </View>
        <Text>random number : {randomNumber}</Text>
      </View>
    );
  };
  export default App; */

  // UseMemo
/*   const App = ()=>{
    const [number,setNumber] = useState(0);
    const [isRandom,setRandom] = useState(false);
    const randomWithoutMemo = Math.random();

    const randomNumber = useMemo(()=>{
      return Math.random();
    },[isRandom]);
    return (
      <View style ={styles.container}>
        <View style = {styles.countContainer}>
          <Button title="Down" onPress={()=>setNumber(number-1)}/>
          <Text>{number}</Text>
          <Button title="Up" onPress={()=>setNumber(number+1)}/>
        </View>
        <Text>without useMemo : {randomWithoutMemo}</Text>
        <Text>UseMemo : {randomNumber}</Text>
        <Button
        title = 'Random'
        onPress = {()=>{setRandom(! isRandom)}}
        />
      </View>
    );
  };
  export default App; */

  //RefreshControl
  /* const styles = StyleSheet.create({
     container: {
     flex: 1,
     },
     scrollView: {
     flex: 1,
     backgroundColor: 'pink',
     alignItems: 'center',
     justifyContent: 'center',
    },
    });
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const App = () => {
    const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <Text>Pull down to see RefreshControl indicator</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
  export default App; */

  //TextInput
/*   const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
   },
   input :{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
   }
   });

  const UselessTextinput = ()=>{
    const [text,onChangeText]=useState(null);
    const [number,onChangeNumber]=useState(null);

    return(
      <SafeAreaView style={styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        />
         <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={Number}
        placeholder = "useless placeholder"
        keyboardType = "numeric"
        />
        <Text> {text}</Text>
        <Text> {number}</Text>
      
      </SafeAreaView>
    )
  }

export default UselessTextinput; */

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems:'center',
  marginTop:60
  },

 textInputStyle :{
   textAlign :'center',
   height:50,
   width:'70%',
   margin:12,
   borderColor:'black',
   marginBottom:10
 }
 });

 const CheckValue = (inputValue)=>{
   if(isNaN(inputValue)){
     alert("Not Num")
   }else{
     alert("Is Num");
   }
 }
const App = () => {
 const [inputValue,setInputValue]=useState('');
 return(
   <SafeAreaView style={{flex:1}}>
   <View style={styles.container}> 
     <TextInput
   placeholder="Enter Text"
   style = {styles.textInputStyle}
   onChangeText = {(inputValue)=>{setInputValue(inputValue)}}
   />
   <Button
   title = "Check Value"
   color = "#FC866D"
   onPress={CheckValue}

   />
   </View>
   </SafeAreaView>
 )
}
export default App;