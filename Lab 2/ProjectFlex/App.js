import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1,flexDirection: 'row', padding: 30}}>
      <View style={{flex:1,width: '80%' , height: 300 , backgroundColor: 'red'}} />
      <View style={{flex:2,width: '80%' , height: 300 , backgroundColor: 'blue'}} />
      <View style={{width: '80%' , height: 300 , backgroundColor: 'green'}} />
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
})
