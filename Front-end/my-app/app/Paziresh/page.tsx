"use client";
import MachineInfo from "@/components/MachineInfo";
import MainFrame from "@/components/MainFrame";
import { Chip } from "@nextui-org/react";
import { useMachineInfoStore } from "../store";
import { useTransitionStore } from "../store";
const StringAccepter = () => {
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
        <h1 className='text-2xl font-black text-darkColor'>پذیرش رشته</h1>
      </header>
      <span className='font-medium mt-9 block text-right'>
        :پذیرش رشته شامل دو گام است
      </span>
      <span className='block font-bold text-right mt-2'>گام اول</span>
      <span className='block text-right mt-1 mr-6 font-medium mb-6'>
        در این گام شما ابتدا ماشین مورد نظر خود را که قرار است رشته را بپذیرد
        رسم میکنید
      </span>
      <MachineInfo redirectPathname='/Paziresh/result' />
    </MainFrame>
  );
};

export default StringAccepter;
