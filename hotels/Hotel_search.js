import React,{useState} from 'react'
import { View,Text, TextInput,StyleSheet, Button,Image, ScrollView, SafeAreaView,TouchableHighlight,Modal,Alert,Pressable} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {useSelector} from 'react-redux'
export default function Hotel_search() {

    console.warn('it is there')
    let result = useSelector((state)=>state.hotelData);
    console.warn("hello ji",result)
    
    // const[place,setPlace]=useState("Delhi")
    // const[placeid,setPlaceid]=useState(null)
    // const [checkin, setCheckin] = useState('')
    // const [checkout, setCheckout] = useState('')
    // const toggleShowPassword = () => { 
    //     setShowPassword(!showPassword); 
    // }; 
    // const [modal,setModal]=useState(false)

    // const searchPlace=async()=>{
    //     console.warn("this is",place)
    //     const url = `https://hotels-com-provider.p.rapidapi.com/v2/regions?query=${place}&domain=IN&locale=en_IN`;
    //     console.warn(url)
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': '395f668d84msh49c4b4f88b5528cp180c9djsn1bcacdd4b727',
    //                 'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
    //             }
    //         };
            
    //         try {
    //             const response = await fetch(url, options);
    //             const result = await response.json();
    //             setPlaceid(result.data[0].gaiaId)
                
    //         } catch (error) {
    //            setModal(true)
    //         }
    // }
    // const searchHotel=async()=>{
    //     searchPlace()
    //     console.warn(checkin)
    //     console.warn(checkout)
    //     const url2 = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?region_id=${placeid}&locale=en_IN&checkin_date=${checkin}&sort_order=REVIEW&adults_number=7&domain=IN&checkout_date=${checkout}&children_ages=4%2C0%2C15&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&price_min=10&star_rating_ids=3%2C4%2C5&meal_plan=FREE_BREAKFAST&page_number=1&price_max=500&amenities=WIFI%2CPARKING&payment_type=PAY_LATER%2CFREE_CANCELLATION&guest_rating_min=8&available_filter=SHOW_AVAILABLE_ONLY`;
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '395f668d84msh49c4b4f88b5528cp180c9djsn1bcacdd4b727',
    //             'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
    //         }
    //     };
        
    //     try {
    //         const response = await fetch(url2, options);
    //         const result = await response.json();
    //         console.warn(result.properties[0].name);
    //     } catch (error) {
    //        setModal(true)
    //     }
    // }
    
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView >
            <StatusBar
            backgroundColor="#F2C6B0"
            style="dark"
          />
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
    contain: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#F5F9FE', 
        borderRadius: 8, 
        paddingHorizontal: 14, 
        marginHorizontal:20,
        marginBottom:20,
    }, 
    input: { 
        flex: 1, 
        color: '#333', 
        paddingVertical: 10, 
        paddingRight: 10, 
        fontSize: 16, 
    }, 
    icon: { 
        marginLeft: 10, 
    },  
    logo: {
        width: 300,
        height: 250,
        marginTop:30,
        alignSelf: 'center',
      },
    word:{
       fontWeight:'600',
       marginLeft:20,
       fontSize:18,
       marginBottom:10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingVertical: 10,
        marginHorizontal:30,
        marginTop:30,
        borderRadius:10,
        marginBottom:50,
    },  
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingHorizontal:50,
      },
      buttoni: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal:30,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        
      },
    
}); 

