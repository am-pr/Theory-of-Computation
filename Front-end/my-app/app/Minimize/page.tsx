"use client";
import MachineInfo from "@/components/MachineInfo";
import MainFrame from "@/components/MainFrame";
import { Chip } from "@nextui-org/react";
import { useMachineInfoStore } from "../store";
import { useTransitionStore } from "../store";
const Minimize = () => {
  const resetTransitions = useTransitionStore((state) => state.reset);
  const resetMachine = useMachineInfoStore((state) => state.reset);

  resetMachine();
  resetTransitions();

  return (
    <MainFrame>
      <header className='flex justify-between'>
        <Chip
          classNames={{ base: "bg-darkMediumColor", content: "text-white" }}
          variant='solid'
        >
          مرحله ۱ از ۲
        </Chip>
        <h1 className='text-2xl font-black text-darkColor'>مینیمایز کردن</h1>
      </header>
      <span className='block font-medium text-right mt-9 mb-7 text-darkColor'>
        ماشین را رسم کنید
      </span>
      <MachineInfo redirectPathname='/Minimize/result' />
    </MainFrame>
  );
};

export default Minimize;
