import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { CenterContainer } from '../../components/Container';
import { useNavigation } from '@react-navigation/native';
// import {AccessToken, Profile, LoginManager} from 'react-native-fbsdk-next';

const LoginPage = (props) => {
  const page = useNavigation();

  const onLoginComplete = () => {
    // page.navigate('Home')u;
    page.push('Main');
  };

  // Ⅰ.페이스북로그인 클릭시 호출되는 함수
  const facebookLogin = () => {
    Alert.alert('페북 버튼 누름');
    // LoginManager.logInWithPermissions(['public_profile']).then(
    //     function (result) {
    //         if (result.isCancelled) {
    //             console.log('Login cancelled');
    //         } else {
    //             console.log(
    //                 'Login success with permissions: ' +
    //                 result.grantedPermissions.toString(),
    //             );
    //             AccessToken.getCurrentAccessToken().then(data => {
    //                 console.log(`\n\naccessToken: ${data.accessToken.toString()}\n\n`);
    //                 getCurrentFacebookProfile();
    //             });
    //         }
    //     },
    //     function (error) {
    //         console.log('Login fail with error: ' + error);
    //     },
    // );
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

      <TouchableOpacity style={styles.facebookLoginBtn} onPress={facebookLogin}>
        <Image
          style={styles.facebookIcon}
          source={require('../../assets/facebook.png')}
        />
        <Text style={{ fontSize: 18, color: '#fff', marginLeft: 24 }}>
          페이스북 로그인
        </Text>
      </TouchableOpacity>
    </CenterContainer>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  facebookLoginBtn: {
    backgroundColor: '#3E65B4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    width: '60%',
    marginTop: 16,
  },
  facebookIcon: {
    width: 10,
    height: 20,
  },
});
