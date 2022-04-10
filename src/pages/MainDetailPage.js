import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CenterContainer } from '../components/Container';
import MainDetailBottomPage from './MainDetailBottomPage';
import { useNavigation } from '@react-navigation/native';

const MainDetailPage = (props) => {
  const page = useNavigation();

  const onMoveBack = () => {
    // page.goBack()
    page.pop();
    // = web의 history.pop()
  };

  return (
    <>
      <CenterContainer>
        <Text>메인 상세화면이다 children1</Text>
        <Text>메인 상세화면이다 children2</Text>

        <TouchableOpacity
          onPress={onMoveBack}
          style={{
            backgroundColor: 'skyblue',
            padding: 16,
            borderRadius: 10,
            marginTop: 16,
          }}
        >
          <Text style={{ color: 'white' }}>뒤로가기</Text>
        </TouchableOpacity>
      </CenterContainer>

      <MainDetailBottomPage backgroundColor={'tomato'} />
    </>
  );
};

export default MainDetailPage;
