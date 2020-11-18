import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen.js'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello 9T</Text>
    //   <Text>I need to test</Text>
    //   <Text>Ok?</Text>
    //   <StatusBar style="auto" />
    // </View>
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
