import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Main from './src/Main';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {firebase} from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBU1fO3VmVk8D3IOR2Byi_NRTWpQqeVyhg',
  authDomain: 'chat-application-1a06c.firebaseapp.com',
  projectId: 'chat-application-1a06c',
  storageBucket: 'chat-application-1a06c.firebasestorage.app',
  messagingSenderId: '667961222377',
  appId: '1:667961222377:ios:09e319f001b63a8baafc78',
};
let app;
console.log('Initializing Firebase...');
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized', app);
} else {
  app = firebase.app();
  console.log(app, 'else');
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Main />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
