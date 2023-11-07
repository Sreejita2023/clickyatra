import React,{useState} from 'react'
import { View,Text,StyleSheet,Image, TextInput,TouchableHighlight,Modal,Pressable,Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {app} from '../firebaseConfig' 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Signin({navigation}) {
    const [password, setPassword] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [showPassword, setShowPassword] = useState(false); 
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    const [modal,setModal]=useState(false)
    const auth = getAuth(app);
    const help=()=>{
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Home')
          })
          .catch((error) => {
             setModal(true)
          });
    }
  return (
    <View>
        <StatusBar
        backgroundColor="#007CC1"
        style="light"
      />
       <Modal
           transparent={true}
           visible={modal}
           onRequestClose={() => {
             Alert.alert('You have not logged in');
             setModal(!modal);
           }}>
           <View style={styles.centeredView}>
             <View style={styles.modalView}>
               <Text style={styles.modalText}>Invalid Login Credentials</Text>
               <Pressable
                 style={[styles.buttoni, styles.buttonClose]}
                 onPress={() => setModal(!modal)}>
                 <Text style={styles.textStyle}>Okay</Text>
               </Pressable>
             </View>
           </View>
      </Modal>
         <Image
        style={styles.logo}
        source={require('../assets/Wave.png')}
      />
      <Text style={styles.head}>Sign in</Text>
      <Text style={{textAlign:'center',fontStyle:'italic',marginHorizontal:45,lineHeight:30,marginBottom:30}}>In just a few seconds, your personalized{"\n"}travel plan will be ready to go!</Text>
      <View  style={styles.contain}>
          <TextInput placeholder='Email' onChangeText={setEmail} style={styles.input}  placeholderTextColor="#aaa"  value={email} />
      </View>
      <View style={styles.contain}> 
                <TextInput 
  
                    // Set secureTextEntry prop to hide  
                    //password when showPassword is false 
                    secureTextEntry={!showPassword} 
                    value={password} 
                    onChangeText={setPassword} 
                    style={styles.input} 
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                /> 
                <MaterialCommunityIcons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    onPress={toggleShowPassword} 
                /> 
         </View> 

    <TouchableHighlight style={styles.button} onPress={help} >
        <View >
          <Text style={{color:'#FFFFFF',fontWeight:'semibold',fontSize:20,}}>Log in</Text>
        </View>
    </TouchableHighlight>   
    <View style={{flexDirection:'row',alignSelf:'center',}}>
       <Text style={{fontSize:17,marginRight:10}}>Don't have an account?</Text>
       <Text onPress={()=>{navigation.navigate('Signup')}} style={{color:"#007CC1",fontSize:18,fontWeight:'600'}}>Sign up</Text>
    </View>
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
      width: 90,
      height:90,
      marginTop:100,
      alignSelf:'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#007CC1',
      paddingVertical: 10,
      marginHorizontal:30,
      marginTop:70,
      borderRadius:10,
      marginBottom:50,
    },
    head:{
        fontSize:30,
        fontStyle: 'normal',
        fontWeight: "700",
        marginTop:10,
        marginBottom:30,
        textAlign:'center',
        color:"#007CC1"
    },
    contain: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#F5F9FE', 
        borderRadius: 8, 
        paddingHorizontal: 14, 
        marginHorizontal:30,
        marginVertical:15,
    }, 
    input: { 
        flex: 1, 
        color: '#7C8BA0', 
        paddingVertical: 15, 
        paddingRight: 10, 
        fontSize: 18, 
    }, 
    icon: { 
        marginLeft: 10, 
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
