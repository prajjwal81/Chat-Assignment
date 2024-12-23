import AsyncStorage from '@react-native-async-storage/async-storage';
export const addItem = async val => {
  await AsyncStorage.setItem('user', JSON.stringify(val));
};

export const getItem = async key => {
  return await AsyncStorage.getItem('user');
};

export const clearItem = async () => {
  try {
    await AsyncStorage.removeItem('user');
    console.log('User data removed from AsyncStorage');
  } catch (error) {
    console.error('Error removing user data:', error);
  }
};
