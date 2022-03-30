import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CenterContainer} from '../components/Container';

const HomeScreen = ({navigation}) => {
  return (
    <CenterContainer>
      <Text>HomeScreen</Text>

      <TouchableOpacity
        style={{marginTop: 16}}
        onPress={() => navigation.navigate('HomeDetail')}>
        <Text>Move HomeDetailScreen</Text>
      </TouchableOpacity>
    </CenterContainer>
  );
};

export default HomeScreen;
