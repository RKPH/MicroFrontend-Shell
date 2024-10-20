import { create } from "zustand";

let store;

const createCounterStore = (set) => ({
  count: 0,
  increaseCount: () =>
    set((state) => {
      console.log("Increasing count:", state.count + 1);
      return { count: state.count + 1 };
    }),
});

const useCounterStore = () => {
  if (!store) {
    store = create((set) => createCounterStore(set));
  }
  return store;
};

export default useCounterStore;
