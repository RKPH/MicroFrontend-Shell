// src/Store/Counterstore.js
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0, // Initial state
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}));

export default useCounterStore;
