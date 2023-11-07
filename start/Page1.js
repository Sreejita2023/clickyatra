import React from 'react'
import { View,Text,StyleSheet,TouchableHighlight,Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';


export default function Page1({navigation}) {
 
  return (
    <View>
        <StatusBar
        backgroundColor="#24968b"
        style="light"
      />
        <Image
        style={styles.logo}
        source={require('../main-assets/travel.gif')}
      />
      <Text style={{ fontWeight:'bold',fontSize:20,textAlign:'center'}}>Face diificuilty in finding best places??</Text>
      <TouchableHighlight style={styles.button} onPressIn={()=>{navigation.navigate('Page2')}} >
        <View >
          <Text style={{color:'#FFFFFF',fontWeight:'semibold',fontSize:20,}}>Next</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignContent:'center'
    },
    logo: {
      width: 400,
      height: 408,
      marginTop:150,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#24968B',
      paddingVertical: 10,
      marginHorizontal:80,
      marginTop:50,
      borderRadius:10,
      
    },
  });