"use client";
import MachineDrawer from "@/components/MachineDrawer";
import MainFrame from "@/components/MainFrame";
import { useMachineInfoStore } from "@/app/store";
import { useTransitionStore } from "@/app/store";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const MachineMaker = () => {
  const states = useMachineInfoStore((state) => state._states);
  const initialState = useMachineInfoStore((state) => state.initialState);
  const finalStates = useMachineInfoStore((state) => state.finalStates);
  const transitions = useTransitionStore((state) => state.transitions);

  const resetTransitions = useTransitionStore((state) => state.reset);
  const resetMachine = useMachineInfoStore((state) => state.reset);

  const router = useRouter();

  // Optimize states (key names are changed to be compatible with VIS.js)
  const optimizedState = states.map((state) => ({ id: state, label: state }));

  return (
    <MainFrame>
      <h1 dir='rtl' className='py-4 pr-10 text-center'>
        ماشین ساخته شده :
      </h1>
      <MachineDrawer
        states={optimizedState}
        finalStates={finalStates}
        initialState={initialState}
        transitions={transitions}
      />
      <Button
        onClick={() => router.push("/Paziresh/result")}
        variant='ghost'
        size='lg'
      >
        GO TO PAZIRESH RESULT
      </Button>
    </MainFrame>
  );
};

export default MachineMaker;
