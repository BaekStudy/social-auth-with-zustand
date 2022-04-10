import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CenterContainer } from '../components/Container';
import { useNavigation } from '@react-navigation/native';

const MainPage = (props) => {
  const page = useNavigation();

  const onMoveMainDetail = () => {
    page.push('MainDetail');
    // page.navigate('MainDetail');
  };

  return (
    <CenterContainer>
      <Text>여기는 메인페이지</Text>

      <TouchableOpacity
        style={{ marginTop: 16, backgroundColor: 'tomato', padding: 16 }}
        onPress={onMoveMainDetail}
      >
        <Text style={{ color: 'white' }}>메인상세화면으로 이동</Text>
      </TouchableOpacity>
    </CenterContainer>
  );
};

export default MainPage;
