import create from 'zustand';
import {devtools} from 'zustand/middleware';

// set 함수를 통해서만 상태 변경가능
const store = set => ({
  bears: 0,
  tigers: [],
  increaseBear: () => set(state => ({bears: state.bears + 1})),
  decreaseBear: () => set(state => ({bears: state.bears - 1})),

  addTiger: tiger =>
    set(state => ({
      tigers: state.tigers.concat(tiger),
    })),
  updateTigers: tigers => {
    set({tigers});
  },

  removeAllBears: () => set({bears: 0}),
  testFunc: obj => {
    console.log('obj', obj);
    const {msg, newCount} = obj;
    console.log(msg, newCount);
    set(state => ({bears: newCount}));
  },
});

const userStore = create(devtools(store));
userStore.subscribe(state => {
  console.log(`Something's changed: `, state); // 어떤 상태가 변경되더라도 로그가 출력됨
});

export default userStore;

// 참조글 - https://ui.toast.com/weekly-pick/ko_20210812
