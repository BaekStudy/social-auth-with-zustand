import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CenterContainer } from '../../components/Container';
import { useNavigation } from '@react-navigation/native';

const LoginPage = (props) => {
  const page = useNavigation();

  const onLoginComplete = () => {
    // page.navigate('Home')u;
    page.push('Main');
  };

  return (
    <CenterContainer>
      <Text>여기는 로그인페이지이다</Text>

      {/*  TouchableOpacity = Web에서의 Button */}
      <TouchableOpacity
        onPress={onLoginComplete}
        style={{
          borderRadius: 10,
          backgroundColor: 'tomato',
          marginTop: 16,
          padding: 8,
        }}
      >
        <Text style={{ color: 'white' }}>메인화면으로 이동</Text>
      </TouchableOpacity>
    </CenterContainer>
  );
};

export default LoginPage;
