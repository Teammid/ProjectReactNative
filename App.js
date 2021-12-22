import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './screens/HomeScreens';
import AboutScreens from './screens/AboutScreens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Home" 
        component={HomeScreens} 
        options={{title:'หน้าหลัก'}} 

        />
        <Stack.Screen name="About Me" 
        component={AboutScreens} 
        options={{title:'เกี่ยวกับเรา'}} 

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
