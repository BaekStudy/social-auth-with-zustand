import React, { useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { CenterContainer } from '../components/Container';
import { useNavigation } from '@react-navigation/native';

const StartSplashPage = (props) => {
  const { navigation, route } = props;
  console.log('props', props);
  console.log('navigation', navigation);
  console.log('route', route);

  const page = useNavigation();
  // = const page = useHistory()

  useEffect(() => {
    // 2초있다가 로그인화면으로 가세요.
    setTimeout(() => {
      // page.navigate('Login'); // 화면이동

      page.replace('Login');
      // page.push('Login')
    }, 2000);
  }, []);

  return (
    <CenterContainer>
      <ImageBackground
        source={require('../assets/yeonah.jpeg')}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>앱 시작하자마자 제일 처음에 잠깐 나오는 화면</Text>
      </ImageBackground>
    </CenterContainer>
  );
};

export default StartSplashPage;
