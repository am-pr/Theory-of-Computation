"use client";
import MachineInfo from "@/components/MachineInfo";
import MainFrame from "@/components/MainFrame";
import { Chip } from "@nextui-org/react";
import { useMachineInfoStore } from "../store";
import { useTransitionStore } from "../store";
const Compliment = () => {
  const resetTransitions = useTransitionStore((state) => state.reset);
  const resetMachine = useMachineInfoStore((state) => state.reset);

  resetMachine();
  resetTransitions();

  return (
    <MainFrame>
      <header className='flex justify-between'>
        <div />
        <h1 className='text-2xl font-black text-darkColor'>متمم گرفتن</h1>
      </header>
      <span className='block font-medium text-right mt-9 mb-7 text-darkColor'>
        ماشین را رسم کنید
      </span>
      <MachineInfo redirectPathname='/Compliment/result' />
    </MainFrame>
  );
};

export default Compliment;
