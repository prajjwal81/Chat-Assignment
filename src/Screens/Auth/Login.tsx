import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmResult, setConfirmResult] = useState(null);
  const [loading, setLoading] = useState(false); // loading state
  const navigation = useNavigation();

  const handleSendCode = async () => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      Alert.alert(
        'Invalid Phone Number',
        'Please enter a valid 10-digit phone number.',
      );
      return;
    }

    const formattedPhoneNumber = `+91${phoneNumber}`;

    try {
      setLoading(true);
      console.log('Sending code to:', formattedPhoneNumber);

      const confirmation = await auth().signInWithPhoneNumber(
        formattedPhoneNumber,
      );

      console.log('Firebase confirmation object:', confirmation);

      if (confirmation && confirmation.confirm) {
        setConfirmResult(confirmation);
        setLoading(false);
        navigation.navigate('Otp', {confirmResult: confirmation, phoneNumber});
      } else {
        throw new Error('Invalid confirmation object');
      }
    } catch (error) {
      console.error('Error sending verification code:', error);

      if (error.code) {
        switch (error.code) {
          case 'auth/invalid-phone-number':
            Alert.alert('Invalid Phone Number', 'The phone number is invalid.');
            break;
          case 'auth/missing-phone-number':
            Alert.alert(
              'Missing Phone Number',
              'Please provide a phone number.',
            );
            break;
          default:
            Alert.alert(
              'Error',
              'There was an error sending the verification code.',
            );
        }
      } else {
        Alert.alert('Error', 'An unexpected error occurred.');
      }
    } finally {
      console.log('Finished attempting to send verification code.');
      navigation.navigate('Otp', {
        confirmResult: confirmation,
        mobile: phoneNumber,
      });
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/splashScreen.png')}
        style={styles.image}
      />
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Your Mobile"
        style={styles.input}
        placeholderTextColor={'black'}
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Pressable onPress={handleSendCode} style={styles.btn} disabled={loading}>
        <Text style={{color: 'white'}}>
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '90%',
    height: '100%',
  },
  input: {
    width: '90%',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 15,
    height: 50,
  },
  btn: {
    width: '90%',
    backgroundColor: 'green',
    height: Dimensions.get('window').height / 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
