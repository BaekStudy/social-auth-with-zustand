import React from 'react';
import { Alert } from 'react-native';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

// set 함수를 통해서만 상태 변경가능
const store = (set) => ({
  numbers: 0, // 곰 개수
  // tigers: [],
  increaseNumber: () => set((state) => ({ numbers: state.numbers + 1 })),
  decreaseNumber: () => set((state) => ({ numbers: state.numbers - 1 })),

  // addTiger: (tiger) =>
  //   set((state) => ({
  //     tigers: state.tigers.concat(tiger),
  //   })),
  // updateTigers: (tigers) => {
  //   set({ tigers });
  // },

  removeAllNumbers: () => set({ numbers: 0 }),
  testFunction: (object) => {
    // object = 객체(오브젝트)
    console.log('object', object);
    const { msg, newNumbers } = object;
    // object.msg, object.newCount
    console.log(msg, newNumbers);
    set((state) => ({ numbers: newNumbers }));

    Alert.alert('numbers 값이 변경되었습니다.', msg + ' ' + newNumbers);
  },
});

const userStore = create(store);
// const userStore = create(devtools(store));
userStore.subscribe((state) => {
  console.log(`Something's changed: `, state); // 어떤 상태가 변경되더라도 로그가 출력됨
});

export default userStore;

// 참조글 - https://ui.toast.com/weekly-pick/ko_20210812
