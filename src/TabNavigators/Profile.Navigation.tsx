import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../Screens/Chat/Chat';
import ChatScreen from '../Screens/Chat/ChatScreen';
import Profile from '../Screens/Profile/Profile';
import Main from '../Main';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
