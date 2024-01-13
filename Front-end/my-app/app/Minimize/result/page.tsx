"use client";
import { useMachineInfoStore, useTransitionStore } from "@/app/store";
import MachineDrawer from "@/components/MachineDrawer";
import MainFrame from "@/components/MainFrame";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Result = () => {
  const { push } = useRouter();

  const states = useMachineInfoStore((state) => state._states);
  const alphabets = useMachineInfoStore((state) => state.alphabets);
  const initialState = useMachineInfoStore((state) => state.initialState);
  const finalStates = useMachineInfoStore((state) => state.finalStates);
  const transitions = useTransitionStore((state) => state.transitions);

  const resetTransitions = useTransitionStore((state) => state.reset);
  const resetMachine = useMachineInfoStore((state) => state.reset);

  // Optimize states (key names are changed to be compatible with VIS.js)
  const optimizedState = states.map((state) => ({ id: state, label: state }));

  return (
    <MainFrame>
      <header>
        <h1 className='text-2xl text-right font-black text-darkColor mt-9 mr-6'>
          مینیمایز کردن
        </h1>
      </header>
      <section className='flex *:text-center gap-x-2 *:basis-1/2 mt-12 mb-3 font-bold'>
        <span>ماشین مینیمایز شده</span>
        <span>ماشین اصلی</span>
      </section>
      <section className='flex gap-x-2'>
        <MachineDrawer //Minimized machine
          className='basis-1/2'
          transitions={transitions}
          states={optimizedState}
          initialState={initialState}
          finalStates={finalStates}
        />
        <MachineDrawer //Main machine
          className='basis-1/2'
          transitions={transitions}
          states={optimizedState}
          initialState={initialState}
          finalStates={finalStates}
        />
      </section>
      <button
        onClick={() => (resetTransitions(), resetMachine(), push("/Minimize"))}
        className='bg-darkColor md:mt-12 w-72 p-4 font-semibold md:text-lg rounded-lg text-primaryColor hover:bg-darkMediumColor transition-all active:scale-95'
      >
        طراحی ماشین جدید
      </button>
    </MainFrame>
  );
};

export default Result;
