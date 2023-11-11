import React,{useState} from 'react'
import { View,Text,StyleSheet,Image, TextInput,TouchableHighlight,Modal,Pressable,Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {app} from '../firebaseConfig' 
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";



export default function Signup({navigation}) {
    const [password, setPassword] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [user,setUser]=useState('')
    const [age,setAge]=useState(null)
    const [showPassword, setShowPassword] = useState(false); 
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    const [modal,setModal]=useState(false)
    const auth = getAuth(app);
    const db = getFirestore(app);

    const userInput=async(user,age,email,password)=>{
        try {
            const docRef = await addDoc(collection(db, "tourists"), {
              user: user,
              age:age,
              email:email,
              password:password,
            });
          } catch (e) {
            setModal(true)
          }
    }
    const help=()=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
             
              navigation.navigate('Signin')
            })
            .catch((error) => {
              setModal(true)
            });
    }
    const both=()=>{
        userInput(user,age,email,password)
        help()
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
             Alert.alert('You have not signed up');
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
        source={require('../assets/Claps.png')}
      />
      <Text style={styles.head}>Sign up</Text>
      
      <View  style={styles.contain}>
          <TextInput placeholder='Username' onChangeText={setUser} style={styles.input}  placeholderTextColor="#aaa"  value={user} />
      </View>
      <View  style={styles.contain}>
          <TextInput placeholder='Age' onChangeText={setAge} style={styles.input}  placeholderTextColor="#aaa"  value={age} />
      </View>
      <View  style={styles.contain}>
          <TextInput placeholder='Email (name@gmail.com)' onChangeText={setEmail} style={styles.input}  placeholderTextColor="#aaa"  value={email} />
      </View>
      <View style={styles.contain}> 
                <TextInput 
  
                    // Set secureTextEntry prop to hide  
                    //password when showPassword is false 
                    secureTextEntry={!showPassword} 
                    value={password} 
                    onChangeText={setPassword} 
                    style={styles.input} 
                    placeholder="Password (min 6 characters)"
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

    <TouchableHighlight style={styles.button} onPress={both} >
        <View >
          <Text style={{color:'#FFFFFF',fontWeight:'semibold',fontSize:20,}}>Create Account</Text>
        </View>
    </TouchableHighlight>   
    <View style={{flexDirection:'row',alignSelf:'center',}}>
       <Text style={{fontSize:17,marginRight:10}}>Do you have an account?</Text>
       <Text onPress={()=>{navigation.navigate('Signin')}} style={{color:"#007CC1",fontSize:18,fontWeight:'600'}}>Sign in</Text>
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
      marginTop:80,
      alignSelf:'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#007CC1',
      paddingVertical: 10,
      marginHorizontal:30,
      marginTop:50,
      borderRadius:10,
      marginBottom:50,
    },
    head:{
        fontSize:30,
        fontStyle: 'normal',
        fontWeight: "700",
        marginTop:10,
        marginBottom:25,
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
        marginVertical:8,
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
