import React from 'react'
import { View,Text,StyleSheet,TouchableHighlight,Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';


export default function Page4({navigation}) {
 
  return (
    <View>
        <StatusBar
        backgroundColor="#007CC1"
        style="light"
      />
        <Text style={{ fontWeight:"900",fontSize:50,textAlign:'center',marginTop:120}}>ClickYatra</Text>
        <Text style={{ fontWeight:"400",fontSize:15,textAlign:'center',marginTop:10,fontStyle:'italic'}}>Destination for Wanderers</Text>
        <Image
        style={styles.logo}
        source={require('../main-assets/woman.png')}
      />
     
      <TouchableHighlight style={styles.button} onPressIn={()=>{navigation.navigate('Signin')}} >
        <View >
          <Text style={{color:'#FFFFFF',fontWeight:'semibold',fontSize:20,}}>Let's started</Text>
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
     
      width: 300,
      height: 308,
      marginTop:100,
      marginLeft:40,
      
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#007CC1',
      paddingVertical: 10,
      marginHorizontal:80,
      marginTop:40,
      borderRadius:10
      
    },
  });