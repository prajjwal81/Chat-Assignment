import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {clearItem} from '../../Utils/storage';
import {useNavigation} from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
  const logoutHandler = () => {
    Alert.alert(
      'Confirmation', // Alert title
      'You want to logout your account ?', // Alert message
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel', // Optional: Gives a cancel button styling
        },
        {
          text: 'OK',
          onPress: () => {
            clearItem();
            navigation.navigate('Main');
          },
        },
      ],
      {cancelable: false}, // Optional: Alert cannot be dismissed by tapping outside
    );
  };

  const MenuItem = ({
    iconName,
    label,
    position,
  }: {
    iconName: string;
    label: string;
    position: string;
  }) => (
    <TouchableOpacity style={[styles.menuItem]}>
      <Text style={styles.menuLabel}>{label}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.menuContainer}>
        <MenuItem
          iconName="star-outline"
          label="My Favorites Photos"
          position="left"
        />
        <MenuItem
          iconName="book-outline"
          label="My All Packages"
          position="left"
        />
        <MenuItem
          iconName="checkmark-circle-outline"
          label="Completed Packages"
          position="left"
        />
        <MenuItem
          iconName="close-circle-outline"
          label="Canceled Packages"
          position="left"
        />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={logoutHandler}>
        {/* <Icon name="log-out-outline" size={20} color="#1abc9c" /> */}
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    paddingLeft: '5%',
  },
  menuContainer: {
    marginTop: 20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: 'grey',
    marginBottom: '10%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1abc9c',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
    width: '95%',
    justifyContent: 'center',
    marginTop: '10%',
  },
  logoutText: {
    marginLeft: 10,
    color: '#1abc9c',
    fontWeight: 'bold',
  },
});
