import { create } from "zustand";

interface MachineState {
  _states: string[];
  alphabets: string[];
  initialState: string;
  finalStates: string[];

  addState: (state: string[]) => void;
  addAlphabet: (alphabet: string[]) => void;
  setInitialState: (state: string) => void;
  addFinalStates: (state: string[]) => void;
  reset: () => void;
}

export const useMachineInfoStore = create<MachineState>()((set) => ({
  _states: [],
  alphabets: [],
  initialState: "",
  finalStates: [],
  addState: (newStates) => set((state) => ({ _states: newStates })),
  addAlphabet: (lastAlphabets) =>
    set((state) => ({ alphabets: lastAlphabets })),
  setInitialState: (newInitialState) =>
    set((state) => ({ initialState: newInitialState })),
  addFinalStates: (newFinalStates) =>
    set(({ finalStates }) => ({
      finalStates: newFinalStates,
    })),
  reset: () =>
    set((state) => ({
      _states: [],
      alphabets: [],
      initialState: "",
      finalStates: [],
    })),
}));

type Transition = {
  from: string;
  to: string;
  symbol: string;
};

type TransitionStoreState = {
  transitions: Transition[];
  addTransition: (newTransition: Transition) => void;
  reset: () => void;
};

export const useTransitionStore = create<TransitionStoreState>((set) => ({
  transitions: [],
  addTransition: (newTransition: Transition) =>
    set((state) => ({ transitions: [...state.transitions, newTransition] })),
  reset: () => set({ transitions: [] }),
}));
