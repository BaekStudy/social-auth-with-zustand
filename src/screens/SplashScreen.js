import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {CenterContainer} from '../components/Container';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <CenterContainer>
      <Text>SplashScreen</Text>
    </CenterContainer>
  );
};

export default SplashScreen;
