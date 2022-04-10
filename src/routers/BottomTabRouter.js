import { View, Text } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../pages/MainPage';
import ZustandCountPage from '../pages/ZustandCountPage';

const Route = createBottomTabNavigator();

const BottomTabRouter = () => {
  return (
    <Route.Navigator screenOptions={{ headerShown: false }}>
      <Route.Screen
        name='Main'
        component={MainPage}
        options={{
          title: '홈',
        }}
      />
      <Route.Screen
        name='SecondBottomTab'
        component={ZustandCountPage}
        options={{
          title: '두번쨰 탭',
        }}
      />
    </Route.Navigator>
  );
};

export default BottomTabRouter;
