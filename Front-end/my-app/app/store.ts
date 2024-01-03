import { create } from "zustand";

// #region MachineInfo store
interface MachineState {
  _states: string[];
  alphabets: string[];
  initialState: [string];
  finalStates: string[];

  addState: (state: string[]) => void;
  addAlphabet: (alphabet: string[]) => void;
  setInitialState: (state: [string]) => void;
  addFinalStates: (state: string[]) => void;
  reset: () => void;
}

export const useMachineInfoStore = create<MachineState>()((set) => ({
  _states: [],
  alphabets: [],
  initialState: [""],
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
      initialState: [""],
      finalStates: [],
    })),
}));
// #endregion

// #region Transition store
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
    set((state) => {
      if(state.transitions.some(t => t.from === newTransition.from && t.symbol === newTransition.symbol)){
       const updatedTransitions = state.transitions.filter((t)=> t.from !== newTransition.from || t.symbol !== newTransition.symbol)
       return { transitions: [...updatedTransitions, newTransition] };
      }
      return { transitions: [...state.transitions, newTransition] };
    }),
  reset: () => set({ transitions: [] }),
}));
// #endregion
