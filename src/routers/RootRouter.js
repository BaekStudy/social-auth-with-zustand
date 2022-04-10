import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabRouter from './BottomTabRouter';
import StartSplashPage from '../pages/StartSplashPage';
import MainDetailPage from '../pages/MainDetailPage';
import LoginPage from '../pages/auth/LoginPage';

const Route = createNativeStackNavigator();

const RootRouter = () => {
  return (
    <Route.Navigator
      initialRouteName='Splash'
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          lineHeight: 24,
          color: '#000',
          fontWeight: 'bold',
          // fontFamily: 'NotoSansKR-Regular',
        },
        headerStyle: {
          shadowOffset: { height: 0, width: 0 },
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
      })}
    >
      <Route.Screen
        name='Splash'
        component={StartSplashPage}
        options={{ headerShown: false }}
      />
      <Route.Screen
        name='Login' // name = react router의 path
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Route.Screen
        name='Main'
        component={BottomTabRouter}
        options={{ headerShown: false }}
      />
      <Route.Screen
        name='MainDetail'
        component={MainDetailPage}
        options={{ title: '홈 상세화면' }}
      />
    </Route.Navigator>
  );
};

export default RootRouter;
