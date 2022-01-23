import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput
} from 'react-native';
import React, { useState } from 'react';

const Seach = () => {
    const [text, Seachitem] = useState('')
    return (
        <SafeAreaView style={styles.background} >
            <View style={styles.heading}>
                <Text style={styles.heading}>Seach</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={Seachitem}
                    value={text}
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.Product}>Product</Text>
            </View>
        </SafeAreaView>

    );
};

export default Seach;

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#6495ED',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: 370,
    },
    heading: {
        fontSize: 35,
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#FDFEFE',
    },
    input: {
        height: 40,
        margin: 15,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FDFEFE',
        width: 375,

    },
    Product: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 5,
    },
    container: {
        height: 450,
        marginTop: 10,
        marginLeft: 20,
        borderWidth: 2,
        marginRight: 20,
        backgroundColor: '#FDFEFE',
        alignItems: 'center',
        borderRadius: 10,

    }
});
