import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Main from './src/Main';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {firebase} from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';

// GoogleSignin.configure({
//   webClientId:
//     '667961222377-ki9pn6bg6shjbnv3viuuoep0ctlkhslo.apps.googleusercontent.com',
// });

const firebaseConfig = {
  apiKey: 'AIzaSyBU1fO3VmVk8D3IOR2Byi_NRTWpQqeVyhg',
  authDomain: 'chat-application-1a06c.firebaseapp.com',
  projectId: 'chat-application-1a06c',
  storageBucket: 'chat-application-1a06c.firebasestorage.app',
  messagingSenderId: '667961222377',
  appId: '1:667961222377:ios:f7ebba8a094c54cdaafc78',
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

// function GoogleSignIn() {
//   return (
//     <Button
//       title="Google Sign-In"
//       onPress={() =>
//         onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
//       }
//     />
//   );
// }

// async function onGoogleButtonPress() {
//   try {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
//     // Get the users ID token
//     const signInResult = await GoogleSignin.signIn();

//     // Try the new style of google-sign in result, from v13+ of that module
//     let idToken = signInResult.data?.idToken;
//     if (!idToken) {
//       // if you are using older versions of google-signin, try old style result
//       idToken = signInResult.idToken;
//     }
//     if (!idToken) {
//       throw new Error('No ID token found');
//     }

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(
//       signInResult.data.token,
//     );

//     // Sign-in the user with the credential
//     auth().signInWithCredential(googleCredential);
//   } catch (error) {
//     console.log(error);
//   }
// }

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
