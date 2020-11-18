import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import Status from './components/Status';
import MessageList from './components/MessageList';
import { createImageMessage, createLocationMessage, createTextMessage, } from './utils/MessageUtils';
export default class App extends React.Component {
  state = {
    messages: [
      createImageMessage('https://pbs.twimg.com/profile_images/1281148827752251392/p_j4_-on.jpg'),
      createTextMessage('Test1'),
      createTextMessage('Test2'),
      createLocationMessage({
        latitude: 13.84366667,
        longitude: 100.50775,
      }),
    ],
  };
  renderMessageList() {
    const createTwoButtonAlert = () =>
      Alert.alert(
        "Delete",
        "Are you sure you want to permanently delete this message",
        [{ text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "Delete", onPress: () => console.log("Delete Pressed"),style: "destructive" }],
        { cancelable: false }
      );
    const { messages } = this.state;
    return (
      <View style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={createTwoButtonAlert}
        />
      </View>
    );
  }
  renderInputMethodEditor() {
    return (
      <View style={styles.inputMethodEditor}>
        <TextInput style={{ fontSize: 18, padding: 6 }}
          placeholder=" Type something! " />
      </View>
    );
  }
  renderToolbar() {
    return (
      <View style={styles.toolbar}>
        <Button title="📷" />
        <Button title="📍" />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Status />
        {this.renderMessageList()}
        <View style={{ flexDirection: "row" }}>
          {this.renderToolbar()}
          {this.renderInputMethodEditor()}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F8F8F9'
  },
  toolbar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
})