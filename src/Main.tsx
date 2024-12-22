import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthStack from './TabNavigators/Auth';
import BottomStack from './Stack/BottomStackNavigator';

export default function Main() {
  const [loading, setLoading] = useState(false);
  return !loading ? <AuthStack /> : <BottomStack />;
}

const styles = StyleSheet.create({});
