import React,{useEffect, useState} from 'react'
import { View,Text, TextInput,StyleSheet, Button,Image, ScrollView, SafeAreaView,TouchableHighlight,Modal,Alert,Pressable} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
export default function Location(){
    
    console.warn('it is there')
    const result = useSelector((state)=>state.productData);
    console.warn("hello ji",result)
    const val=result.data[0].result_object
    let img=val.photo.images.original.url
    console.warn(img)
    console.warn("got it",val)
   
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
         
               {
                img?<Image src={img}style={{width:350,height:350,alignSelf:'center',marginTop:20,borderRadius:10}}/>
                :<Image
                style={{width:350,height:350,alignSelf:'center',marginTop:20,borderRadius:10}}
                source={require('../main-assets/run.gif')}
              />
               }

               {
                 val.location_string? <Text style={{marginTop:20,fontWeight:'900',fontSize:25,marginLeft:20}}>{val.location_string}</Text>
                 :
                 <Text style={{marginTop:20,fontWeight:'900',fontSize:25,marginLeft:20}}>No Such Location Exist</Text>
               }
              
               {
                val.timezone?<Text style={{marginTop:20,fontWeight:'300',fontSize:15,marginLeft:20}}>Timezone: {val.timezone}</Text>
                :
                <Text style={{marginTop:20,fontWeight:'300',fontSize:15,marginLeft:20}}>No such timezone</Text>
               }
               

               {
                val.description?
                <Text style={{marginTop:30,fontWeight:'400',fontSize:18,marginLeft:20,marginRight:20,marginBottom:20}}>{val.description}</Text>
                :<Text style={{marginTop:30,fontWeight:'400',fontSize:18,marginLeft:20,marginRight:20,marginBottom:20}}>There is no description</Text>
               }

           
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: { 
        flex:1,
       justifyContent:'center',
       alignContent:'center',
       paddingTop: StatusBar.currentHeight,
     },

    })   