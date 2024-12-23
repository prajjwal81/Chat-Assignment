import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const mockUsers = [
  {id: '1', name: 'John Doe', lastMessage: 'Hey, what’s up?'},
  {id: '2', name: 'Jane Smith', lastMessage: 'See you tomorrow!'},
  {id: '3', name: 'Alice Brown', lastMessage: 'Let me know your thoughts.'},
  {id: '4', name: 'Michael Scott', lastMessage: 'That’s what she said!'},
  {id: '5', name: 'David Wallace', lastMessage: 'Great job on the project!'},
  {id: '6', name: 'Rachel Green', lastMessage: 'Can we talk later?'},
  {id: '7', name: 'Ross Geller', lastMessage: 'We were on a break!'},
  {id: '8', name: 'Chandler Bing', lastMessage: 'Could this be any better?'},
];

export default function Chat() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={mockUsers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.userItem}
            onPress={() => navigation.navigate('ChatScreen', {user: item})}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.lastMessage}>{item.lastMessage}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: '20%',
  },
  userItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
});
