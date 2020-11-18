import { Component } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput, Button, Image} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { NoteArray: [], text: "" };
  };

  AddText = () =>{
    this.state.NoteArray.push(this.state.text);
    this.setState({ text:"" });
  };

  RemoveText = (e) =>{
    this.state.NoteArray.splice(e,1);
    this.setState({NoteArray: this.state.NoteArray});
  };

  render() {
    return (
      <View style={{padding: 30 ,flex:1 }}>
        <TextInput
          style={styles.text_input}
          placeholder=" Input "
          onChangeText={(value) => this.setState({text:value})}
          value={this.state.text}/>
        <Button style={styles.button} title="Save" onPress={this.AddText} />
    {this.state.NoteArray.map((item,key) => (<Text key={key} onPress={()=>this.RemoveText(key)}>{item}</Text>))}
        <Image style={styles.logo} source={require('./assets/Logo.png')} />
      </View>
    );
  }
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