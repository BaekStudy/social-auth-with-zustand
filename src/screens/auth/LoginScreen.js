import React from 'react';
import {View, Text} from 'react-native';
import {CenterContainer} from '../../components/Container';

const LoginScreen = ({navigation}) => {
  const onLoginComplete = () => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  };

  return (
    <CenterContainer>
      <Text>LoginScreen</Text>
    </CenterContainer>
  );
};

export default LoginScreen;
