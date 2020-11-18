import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput, Button, Image} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30 ,flex:1 }}>
      <View style={{display:"flex", flexDirection:"colum"}} >
      <TextInput style={styles.text_input} placeholder="Input"/>
      <Button style={styles.button}title="Submit"/>
      </View>
      <Image style={styles.logo} source={require('./assets/Logo.png')} />
    </View>
  );
}
const styles = StyleSheet.create({
  logo:{
      width: 100,
      height: 100,
      position: 'absolute',
      bottom:0,
      right:0,
  },
  button:{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
  },
  text_input:{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
  },
})
