import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from '../start/Page1';
import Page2 from '../start/Page2';
import Page3 from '../start/Page3';
import Page4 from '../start/Page4';
function Appnavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Page1"screenOptions={{
        headerShown: false
      }}>
    <Stack.Screen
      name="Page1"
      component={Page1}
    />
    <Stack.Screen
      name="Page2"
      component={Page2}
    />
    <Stack.Screen
      name="Page3"
      component={Page3}
    />
    <Stack.Screen
      name="Page4"
      component={Page4}
    />
   
  </Stack.Navigator>
  )
}

export default Appnavigation