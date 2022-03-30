import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import useStore from '../store/configureStore';

const BearCounter = () => {
  // zustand에 담고있던 값을 갖고옴
  const bears = useStore(state => state.bears);

  // 상태를 변경하는 액션을 갖고옴
  const increaseBear = useStore(state => state.increaseBear);
  const decreaseBear = useStore(state => state.decreaseBear);
  const testFunc = useStore(state => state.testFunc);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={increaseBear}
        style={{backgroundColor: 'skyblue', padding: 16}}>
        <Text>+</Text>
      </TouchableOpacity>

      <Text>BearCount: {bears}</Text>
      <TouchableOpacity
        onPress={() => {
          // useStore.setState({bears: 100});
          testFunc({msg: 'ㅎㅇ', newCount: bears + 10});
        }}
        style={{backgroundColor: 'tomato', padding: 16}}>
        <Text>testFunc call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={decreaseBear}
        style={{backgroundColor: 'skyblue', padding: 16, marginTop: 16}}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BearCounter;
