import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AuthStack from './TabNavigators/Auth.Navigation';
import BottomStack from './Stack/BottomStackNavigator';
import {getItem} from './Utils/storage';

export default function Main() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let user = async () => {
      const res = await getItem('user');
      console.log(res);
      if (res) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    };
    user();
  }, []);
  return !loading ? <AuthStack /> : <BottomStack />;
}

const styles = StyleSheet.create({});
