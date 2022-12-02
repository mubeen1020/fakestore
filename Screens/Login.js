import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from '../Styling/Styling';

function Login() {
  return (
    <>
      <View style={style.BackGround}>
        <Text style={[style.Heading, {fontSize: 50,textAlign:'center',paddingTop:45}]}>Login</Text>

        <View style={{marginTop:120,padding:10}}>
            <TextInput placeholder='Email' keyboardType='email-address' style={style.input}/>
            <TextInput placeholder='Password' style={style.input}/>
        </View>
        <View style={{ padding:30,marginTop:40}}>
            <TouchableOpacity style={style.btn}>
                <Text style={{color:'black',textAlign:'center',fontSize:20,fontWeight:'600'}}>Login</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
            <Text style={{fontSize:16}} >Don't Have an account?</Text>
            <Text style={{paddingLeft:5,color:'#91F877',textDecorationLine:'underline',fontSize:16}}>Signup</Text>
        </View>
      </View>
    </>
  );
}

export default Login;
