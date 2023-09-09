import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,TouchableWithoutFeedback,Keyboard, Alert,useWindowDimensions, ScrollView,Dimensions } from 'react-native';
import Svg,{ Path } from 'react-native-svg';
import React,{useState} from 'react'

export default function App() {
  const {width,height}=useWindowDimensions();
  const [phno,setPhno]=useState('')
  const [password,setPassword]=useState('')
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg height={200} width={'100%'} viewBox='0 0 1440 320' style={styles.topWavy}>
            <Path
              fill='#0099FF'
              d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,176C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </Svg>
        </View>
      </View>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{width:'95%',height:'100%',marginHorizontal:10,marginTop:200,marginBottom:30,backgroundColor:'white'}}>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
              <Text style={{color:'green',fontSize:18,fontWeight:'bold'}}>အကောင့်၀င်ရန်</Text>
            </View>
            <View>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{width:70}}>ဖုန်းနံပါတ်</Text>
                <TextInput keyboardType='numeric' placeholder='09*********' value={phno} onChangeText={(text)=>setPhno(text)} style={styles.input}/>
              </View>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{width:70}}>စကား၀ှက်</Text>
                  <TextInput placeholder='**********' value={password} secureTextEntry={true} onChangeText={(text)=>setPassword(text)} style={styles.input}/>
              </View>
              <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <View style={{width:70}}></View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'white',fontWeight:'bold'}}>လုပ်ဆောင်မည်</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop:20,marginRight:10,flexDirection:'row'}}>
                <View style={{width:(width>500)?200:30}}></View>
                <TouchableOpacity>
                    <Text style={{color:'red'}}>စကား၀ှက်မေ့နေပါသလား?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:20}}>
                  <Text style={{color:'green',fontWeight:'bold'}}>အကောင့်မှတ်ပုံတင်ရန်</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.box}>
          <Svg height={200} width={Dimensions.get('screen').width} viewBox='0 0 1440 320' style={styles.bottomWavy}>
            <Path
              fill='#0099FF'
              d="M0,160L60,144C120,128,240,96,360,101.3C480,107,600,149,720,176C840,203,960,213,1080,202.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{
    position:'absolute',
    width:'100%',
    Top:0
  },
  bottom:{
    position:'absolute',
    width:'100%',
    bottom:0,
    // backgroundColor:'red',
    // height:80
  },
  box:{
    backgroundColor:'#0099FF',//#0099FF
    height:80
   
  },
  bottomWavy:{
    position:'absolute',
    bottom:0
  },
  input:{
    fontSize:18,
    margin:20,
    marginBottom:10,
    height:50,
    width:'60%',
    borderWidth:1/2,
    padding:10
  },
  button:{
    backgroundColor:'green',
    borderRadius:5,
    marginTop:20,
    // marginLeft:103,
    height:50,
    width:'60%',
    alignItems:'center',
    justifyContent:'center',
    elevation:7,
    shadowColor:'red',
    // marginHorizontal:100
  },
});
