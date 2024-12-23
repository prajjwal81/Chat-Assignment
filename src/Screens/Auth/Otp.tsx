import React, {useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import auth from '@react-native-firebase/auth';
import {addItem} from '../../Utils/storage';

const CELL_COUNT = 6;

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const {confirmResult, phoneNumber} = route.params;
  const navigation = useNavigation();

  const ref = useBlurOnFulfill({value: otp, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  const handleVerifyCode = async () => {
    if (!otp.trim()) {
      Alert.alert('Error', 'Please enter the verification code.');
      return;
    }

    try {
      setLoading(true);
      await confirmResult.confirm(otp);
      setLoading(false);
      Alert.alert('Success', 'Phone number verified successfully!');
      addItem(phoneNumber);
      navigation.navigate('BottomStack');
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert('Error', 'Invalid code. Please try again.');
    }
  };

  return (
    <View style={{padding: 20}}>
      <Text style={styles.heading}>Enter OTP</Text>
      <Text style={styles.subheading}>
        A verification code has been sent to your phone number
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={otp}
        onChangeText={input => {
          const numericInput = input.replace(/[^0-9]/g, '');
          setOtp(numericInput);
        }}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: 'sms-otp',
          default: 'one-time-code',
        })}
        testID="my-code-input"
        rootStyle={styles.codeFieldRoot}
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <Pressable onPress={() => {}}>
        <Text style={styles.innerText}>
          Didn't receive the code?{' '}
          <Text style={styles.spanStyle}>Resend OTP</Text>
        </Text>
      </Pressable>

      <Pressable
        style={styles.btnContainer}
        onPress={handleVerifyCode}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.btn}>Verify</Text>
        )}
      </Pressable>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  heading: {
    color: '#0A0D14',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 24,
  },
  subheading: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    padding: 15,
    color: '#0A0D14',
    opacity: 0.5,
  },
  codeFieldRoot: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginRight: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  cellText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#0A0D14',
  },
  btnContainer: {
    marginTop: 10,
    backgroundColor: '#4285F4',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
  },
  btn: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  innerText: {
    fontWeight: '400',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 10,
    color: '#0A0D14',
    opacity: 0.5,
  },
  spanStyle: {
    color: '#4285F4',
  },
});
