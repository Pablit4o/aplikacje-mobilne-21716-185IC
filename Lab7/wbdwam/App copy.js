import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomePage from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: 'rgba(102, 178, 255, 0.9)' }} >
        <Stack.Screen name="Home" component={HomePage} 
          options={{ 
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
          }} 
        />
        <Stack.Screen name="Page1" component={Page1} 
          options={{ 
            tabBarLabel: 'Page 1',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="android" color={color} size={size}/>
            ),
          }} 
        />
        <Stack.Screen name="Page2" component={Page2} 
          options={{  
            tabBarLabel: 'Page 2',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="android" color={color} size={size}/>
            ),
          }}
        />
        <Stack.Screen name="Page3" component={Page3} 
          options={{  
            tabBarLabel: 'Page 3',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="android" color={color} size={size}/>
            ),
           }}
        />
        <Stack.Screen name="Page4" component={Page4} 
          options={{  
            tabBarLabel: 'Page 4',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="android" color={color} size={size}/>
            ),
           }}
        />
        <Stack.Screen name="Page5" component={Page5} 
          options={{  
            tabBarLabel: 'Page 5',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="android" color={color} size={size}/>
            ),
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
