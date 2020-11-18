// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { Component } from 'react'
import {StyleSheet,TouchableOpacity,Text,View,} from 'react-native'
class App extends Component {
  state = {
    number: "",
    aws:0,
  }
  onPress1 = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  onPress2 = () => {
    this.setState({
      number: this.state.number + 2
    })
  }
  onPress3 = () => {
    this.setState({
      number: this.state.number + 3
    })
  }
  onPress4 = () => {
    this.setState({
      number: this.state.number + 4
    })
  }
  onPress5 = () => {
    this.setState({
      number: this.state.number + 5
    })
  }
  onPress6 = () => {
    this.setState({
      number: this.state.number + 6
    })
  }
  onPress7 = () => {
    this.setState({
      number: this.state.number + 7
    })
  }
  onPress8 = () => {
    this.setState({
      number: this.state.number + 8
    })
  }
  onPress9 = () => {
    this.setState({
      number: this.state.number + 9
    })
  }
  onPress0 = () => {
    if (!this.state.number == '') {
      this.setState({
        number: this.state.number + 0
      }) 
    }
  }
  onPressDEL = () => {
    let number = this.state.number.split('')
    number.pop()

    this.setState({
      number: this.state.number = number.join('')
    })
  }
  onPressPlus = () => {
    let number = this.state.number.split('')
    let last_number = number.reverse()[0]
    console.log(last_number)

    if (!isNaN(last_number)) {
      this.setState({
        number: this.state.number + "+"
      }) 
    }
  }
  onPressMinus = () => {
    let number = this.state.number.split('')
    let last_number = number.reverse()[0]
    console.log(last_number)

    if (!isNaN(last_number)) {
      this.setState({
        number: this.state.number + "-"
      }) 
    }
  }
  onPressMultiply = () => {
    let number = this.state.number.split('')
    let last_number = number.reverse()[0]
    console.log(last_number)

    if (!isNaN(last_number)) {
      this.setState({
        number: this.state.number + "*"
      }) 
    }
  }
  onPressDivide = () => {
    let number = this.state.number.split('')
    let last_number = number.reverse()[0]
    console.log(last_number)

    if (!isNaN(last_number)) {
      this.setState({
        number: this.state.number + "/"
      }) 
    }
  }
  onPressDOT = () => {
    if (!this.state.number.includes(".")) {
      this.setState({
        number: this.state.number + "."
      })
    }
  }
  onPressAWS = () => {
    if (this.state.number == ".") {
      this.setState({
        aws: this.state.aws = 0
      })
    } else {
      this.setState({
        aws: this.state.aws = eval(this.state.number)
      })
    }
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textprocess}>{this.state.number}</Text>
        </View>
        <View>
          <Text style={styles.textaws}>{this.state.aws}</Text>
        </View>
        <View style={styles.buttonset}>
          <View style={styles.buttonlist}>
            <TouchableOpacity style={styles.button1} onPress={this.onPress1}><Text style={styles.text}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPress4}><Text style={styles.text}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPress7}><Text style={styles.text}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPressDOT}><Text style={styles.text}>.</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonlist}>
            <TouchableOpacity style={styles.button1} onPress={this.onPress2}><Text style={styles.text}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPress5}><Text style={styles.text}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPress8}><Text style={styles.text}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPress0}><Text style={styles.text}>0</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonlist}>
            <TouchableOpacity style={styles.button1} onPress={this.onPress3}><Text style={styles.text}>3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPress6}><Text style={styles.text}>6</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPress9}><Text style={styles.text}>9</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={this.onPressAWS}><Text style={styles.text}>=</Text></TouchableOpacity>
          </View>
          <View style={styles.buttonlist}>
            <TouchableOpacity style={styles.button2} onPress={this.onPressDEL}><Text style={styles.text}>DEL</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={this.onPressPlus}><Text style={styles.text}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={this.onPressMinus}><Text style={styles.text}>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={this.onPressMultiply}><Text style={styles.text}>*</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={this.onPressDivide}><Text style={styles.text}>/</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button1: {
    height:"100%",
    width:"100%",
    alignItems: 'center',
    backgroundColor: '#1B2021',
  },
  button2: {
    height:"80%",
    width:"100%",
    alignItems: 'center',
    backgroundColor: '#627C85',
  },
  buttonlist:{
    flexDirection: 'column',
    height:"20%",
    width:"25%"
  },
  buttonset:{
    flexDirection: 'row',
    height:"75%"
  },
  text:{
    fontSize: 30,
    color:'white',
  },
  textprocess:{
    fontSize:20,
    textAlign: 'right', 
    flex: 1
  },
  textaws:{
    fontSize:30,
    textAlign: 'right', 
    flex: 1
  },
})
export default App;