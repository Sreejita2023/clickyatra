import React,{useState, createContext, } from 'react'
import { View,Text, TextInput,StyleSheet, Button,Image, ScrollView, SafeAreaView,TouchableHighlight,Modal,Alert,Pressable} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux'
// import { searchPlace,getBudget,getCheckin,getCheckout,getTraveller} from '../redux/formaction';
import { searchValue,hotelValue} from '../redux/formaction';

export default function Home({navigation}){
    // collect from user
    const dispatch=useDispatch()
    const[place,setPlace]=useState("")
    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
    const [budget,setBudget]=useState(null)
    const [travellers,setTravellers]=useState(null)
    
    const values={
       place,
       checkin,
       checkout,
       budget,
       travellers
    }

    function getPlace(){
      // dispatch(searchValue(values))
      dispatch(hotelValue(values))
      // dispatch(getBudget(budget))
      // dispatch(getCheckin(checkin))
      // dispatch(getCheckout(checkout))
      // dispatch(getTraveller(travellers))
      navigation.navigate('Hotel_search')
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
               <StatusBar
                 backgroundColor="#9797F7"
                 style="light"
               />
             
             

            <Text style={{textAlign:'center',fontWeight:'900',fontSize:28,marginTop:80}}>Customize your Tour</Text>
              <Image
            style={styles.logo}
            source={require('../main-assets/customize.png')}
          />

             {/* fill the form  */}
            <Text style={styles.word}>Your destination :</Text>
            <View style={styles.contain}> 
                    <TextInput 
                    value={place}
                        onChangeText={setPlace} 
                        style={styles.input} 
                        placeholder="Location/Place"
                        placeholderTextColor="#aaa"
                    />   
             </View> 
             <Text style={styles.word}>Check-in date :</Text>
            <View style={styles.contain}> 
                    <TextInput 
                        value={checkin}
                        onChangeText={setCheckin} 
                        style={styles.input} 
                        placeholder="YYYY-MM-DD"
                        placeholderTextColor="#aaa"
                    />   
             </View> 
             <Text style={styles.word}>Check-out date :</Text>
            <View style={styles.contain}> 
                    <TextInput 
                        value={checkout}
                        onChangeText={setCheckout} 
                        style={styles.input} 
                        placeholder="YYYY-MM-DD"
                        placeholderTextColor="#aaa"
                    />   
             </View> 
             <Text style={styles.word}>Budget :</Text> 
            <View style={styles.contain}> 
                    <TextInput 
                        value={budget}
                        onChangeText={setBudget} 
                        style={styles.input} 
                        placeholder='(in Indian Rupees)'
                        placeholderTextColor="#aaa"
                    />   
             </View> 
             <Text style={styles.word}>No of travellers :</Text>
            <View style={styles.contain}> 
                    <TextInput 
                      value={travellers}
                        onChangeText={setTravellers} 
                        style={styles.input} 
                        placeholder="Enter the no of travellers"
                        placeholderTextColor="#aaa"
                    />   
             </View> 
             <TouchableHighlight style={styles.button}  onPress={getPlace} >
                 <View >
                   <Text style={{color:'#FFFFFF',fontWeight:'semibold',fontSize:20,}}>Get your tour details</Text>
                 </View>
             </TouchableHighlight> 
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
        backgroundColor: '#9797F7',
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
})