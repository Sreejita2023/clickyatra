import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Appnavigation from './src/Appnavigation';

import { Provider } from 'react-redux'
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store} >
       <NavigationContainer>
          <Appnavigation />
      </NavigationContainer>
    </Provider> 
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    padding:24,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:30,
   
  },
});
