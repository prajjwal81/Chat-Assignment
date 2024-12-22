import AsyncStorage from '@react-native-async-storage/async-storage';
export const addItem = async val => {
  await AsyncStorage.setItem('user', JSON.stringify(val));
  const res = await AsyncStorage.getItem('user');
  console.log('res', res);
};

export const getItem = async key => {
  return await AsyncStorage.getItem('user');
};
