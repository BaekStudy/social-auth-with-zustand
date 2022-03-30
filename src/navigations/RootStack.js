import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabStack from './BottomTabStack';
import SplashScreen from '../screens/SplashScreen';
import HomeDetailScreen from '../screens/HomeDetailScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          lineHeight: 24,
          color: '#000',
          fontWeight: 'bold',
          // fontFamily: 'NotoSansKR-Regular',
        },
        headerStyle: {
          shadowOffset: {height: 0, width: 0},
          backgroundColor: '#FBFBFB',
        },
        // headerLeft: () => (
        //   <Touchable onPress={() => navigation.goBack()}>
        //     <AntDesign
        //       name='left'
        //       size={22}
        //       color={'#555'}
        //       style={{ padding: 4, alignSelf: 'center' }}
        //     />
        //   </Touchable>
        // ),
        headerBackTitleVisible: false,
      })}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeDetail"
        component={HomeDetailScreen}
        options={{title: '홈 상세화면'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
