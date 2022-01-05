import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import fristpage from './screens/fristpage'
import second from './screens/second';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="FirstPage"
          component={fristpage}
          options={{
            title: 'FIRST PAGE',
          }}
        />

        <Stack.Screen
          name="SecondPage"
          component={second}
          options={{
            title: 'SECOND PAGE',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 

/* import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0096DA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'หน้าหลัก' }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'เกี่ยวกับเรา' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App */