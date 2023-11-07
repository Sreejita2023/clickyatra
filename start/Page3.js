import React from 'react'
import { View,Text,StyleSheet,TouchableHighlight,Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';


export default function Page3({navigation}) {
 
  return (
    <View>
        <StatusBar
        backgroundColor="#007CC1"
        style="light"
      />
        <Image
        style={styles.logo}
        source={require('../main-assets/run.gif')}
      />
      <Text style={{ fontWeight:'bold',fontSize:20,textAlign:'center'}}>No more stress!!{"\n"}{"\n"}Just pack your bags and Go</Text>
      <TouchableHighlight style={styles.button} onPressIn={()=>{navigation.navigate('Page4')}}>
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
      marginLeft:-10
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#007CC1',
      paddingVertical: 10,
      marginHorizontal:80,
      marginTop:50,
      borderRadius:10
      
    },
  });