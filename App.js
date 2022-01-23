import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Application/Home';
import Seach from './Application/Seach';
import Account from './Application/Account';
import Status from './Application/Status';
import React from 'react';



const Tab = createBottomTabNavigator();
export default  app = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name == 'Home') {
              iconName = 'home';
              size = focused ? 25 : 20;
            } else if (route.name == 'Seach') {
              iconName = 'search';
              size = focused ? 25 : 20;
            }
            else if (route.name == 'Status') {
              iconName = 'book';
              size = focused ? 25 : 20;
            }
            else if (route.name == 'Account') {
              iconName = 'user';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })}
        tabBarOptions={{
          labelStyle: { fontSize: 14 },
          activeTintColor: '#0162A8',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen
          name="Seach"
          component={Seach}

        />
        <Tab.Screen
          name="Status"
          component={Status}

        />
        <Tab.Screen
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}





