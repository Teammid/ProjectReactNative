import React,{useState} from 'react'
import { StyleSheet, Text, View, Modal, Button, SafeAreaView} from 'react-native'

const ModelExample = () => {
    const [showModal,setModal] = useState(false)

    return (
        <SafeAreaView style={{flex:1}}>
        <View style = {styles.container}>
            <Modal
                animationType='slide'
                transparent = {false}
                visible = {showModal}
            >
                <View style = {styles.modal}>
                    <Text>Modal is open</Text>
                    <Button
                    title='Cilck to Close Modal'
                    onPress={()=>setModal(!showModal)}
                    />
                </View>
            </Modal>
            {/* Updating modal */}
            <Button
                title='Click to open Modal'
                onPress = {()=>setModal(!showModal)}
            />
        </View>
        </SafeAreaView>
    )
}

export default ModelExample

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1', 
      marginTop: 30,
    },
    modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f0fff0',
      padding: 100,
    },
    text: {
      color: '#3f2949',
      marginTop: 10,
    },
  });
   
