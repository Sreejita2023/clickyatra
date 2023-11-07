import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Appnavigation from './src/Appnavigation';
export default function App() {
  return (
    <NavigationContainer>
       <Appnavigation />
    </NavigationContainer>
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
