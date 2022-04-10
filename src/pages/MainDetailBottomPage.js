import React from 'react';

import { Text, View } from 'react-native';

const MainDetailBottomPage = ({ backgroundColor }) => {
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <Text>메인 상세화면 하단이다 No children</Text>
    </View>
  );
};

export default MainDetailBottomPage;
