import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increaseCount: () =>
    set((state) => {
      console.log("Increasing count:", state.count + 1);
      return { count: state.count + 1 };
    }),
}));

export default useCounterStore;
