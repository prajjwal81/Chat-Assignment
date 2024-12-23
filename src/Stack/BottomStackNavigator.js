import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import Home from '../Screens/Chat/Chat';
import Profile from '../Screens/Profile/Profile';
import ChatStack from '../TabNavigators/Chat.Navigation';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen name="Home" component={ChatStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomStack;
