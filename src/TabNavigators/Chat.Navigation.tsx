import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../Screens/Chat/Chat';
import ChatScreen from '../Screens/Chat/ChatScreen';

const Stack = createNativeStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="Auth" component={Chat} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default ChatStack;
