import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ChatScreen({route}) {
  const {user} = route.params;
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello!', sender: 'user'},
    {id: '2', text: 'Hi there!', sender: 'me'},
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Simulate incoming messages using setInterval
    const interval = setTimeout(() => {
      const incomingMessage = {
        id: Date.now().toString(),
        text: `New message from ${user.name}`,
        sender: 'user',
      };
      setMessages(prevMessages => [...prevMessages, incomingMessage]);
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [user.name, newMessage]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'me',
    };
    setMessages(prevMessages => [...prevMessages, message]);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.message,
              item.sender === 'me' ? styles.myMessage : styles.userMessage,
            ]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: '20%',
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  userMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
