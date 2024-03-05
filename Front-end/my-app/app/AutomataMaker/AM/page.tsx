"use client";
import MachineDrawer from "@/components/MachineDrawer";
import MainFrame from "@/components/MainFrame";
import { useMachineInfoStore } from "@/app/store";
import { useTransitionStore } from "@/app/store";

const MachineMaker = () => {
  const states = useMachineInfoStore((state) => state._states);
  const initialState = useMachineInfoStore((state) => state.initialState);
  const finalStates = useMachineInfoStore((state) => state.finalStates);
  const transitions = useTransitionStore((state) => state.transitions);
  const resetTransitions = useTransitionStore((state) => state.reset);
  const resetMachine = useMachineInfoStore((state) => state.reset);

  // Optimize states (key names are changed to be compatible with VIS.js)
  const optimizedState = states.map((state) => ({ id: state, label: state }));

  return (
    <MainFrame>
      <MachineDrawer
        states={optimizedState}
        finalStates={finalStates}
        initialState={initialState}
        transitions={transitions}
      />
    </MainFrame>
  );
};

export default MachineMaker;
