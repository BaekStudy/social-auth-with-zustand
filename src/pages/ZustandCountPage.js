import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import useStore from '../store/configureStore';
import { CenterContainer } from '../components/Container';

const ZustandCountPage = () => {
  // zustand에 담고있던 값을 갖고옴
  const numbers = useStore((state) => state.numbers);

  // 상태를 변경하는 액션을 갖고옴
  const increaseNumber = useStore((state) => state.increaseNumber);
  const decreaseNumber = useStore((state) => state.decreaseNumber);
  const testFunc = useStore((state) => state.testFunction);

  return (
    <CenterContainer>
      <TouchableOpacity
        onPress={increaseNumber}
        style={{ backgroundColor: 'skyblue', padding: 16 }}
      >
        <Text>+</Text>
      </TouchableOpacity>

      <Text>Zustand 안에있는 NumberCount 값: {numbers}</Text>
      <TouchableOpacity
        onPress={() => {
          // useStore.setState({bears: 100});
          testFunc({ msg: 'ㅎㅇ', newNumbers: numbers + 10 });
        }}
        style={{ backgroundColor: 'tomato', padding: 16 }}
      >
        <Text>testFunction 함수 호출</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={decreaseNumber}
        style={{ backgroundColor: 'skyblue', padding: 16, marginTop: 16 }}
      >
        <Text>-</Text>
      </TouchableOpacity>
    </CenterContainer>
  );
};

export default ZustandCountPage;
