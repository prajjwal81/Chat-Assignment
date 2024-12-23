import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';
import Otp from '../Screens/Auth/Otp';
import BottomStack from '../Stack/BottomStackNavigator';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="Auth" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="BottomStack" component={BottomStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
