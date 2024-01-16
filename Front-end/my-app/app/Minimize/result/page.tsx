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
    <>
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
          onClick={() => (
            resetTransitions(), resetMachine(), push("/Minimize")
          )}
          className='bg-darkColor md:mt-12 w-72 p-4 font-semibold md:text-lg rounded-lg text-primaryColor hover:bg-darkMediumColor transition-all active:scale-95'
        >
          طراحی ماشین جدید
        </button>
      </MainFrame>

      {/* mobile responsive */}
      <main className='md:hidden mb-52'>
        {/* header */}
        <header className=' h-[8.75rem] w-full bg-darkColor flex'>
          <h1 className='text-xl font-black text-primaryColor mr-[1.75rem] mt-[3.625rem] absolute right-0'>
            مینیمایز کردن
          </h1>
        </header>
        {/* End: header */}

        {/* main Content */}
        <h1 className='w-full p-2 mt-2  mr-3 flex justify-end font-bold'>
          :ماشین اصلی
        </h1>
        <MachineDrawer //Main machine
          className='mx-3'
          transitions={transitions}
          states={optimizedState}
          initialState={initialState}
          finalStates={finalStates}
        />
        <h1 className='w-full p-2  mr-3 flex justify-end font-bold'>
          :ماشین مینیمایز شده
        </h1>
        <MachineDrawer //Minimized machine
          className='mx-3'
          transitions={transitions}
          states={optimizedState}
          initialState={initialState}
          finalStates={finalStates}
        />

        <div className='flex mb-[7.3125rem] mx-4 mt-1'>
          <button
            onClick={() => (
              resetTransitions(), resetMachine(), push("/Paziresh")
            )}
            className='basis-1/4 bg-darkColor py-2 px-4 font-semibold md:text-lg rounded-lg text-primaryColor hover:bg-darkMediumColor transition-all active:scale-95'
          >
            طراحی ماشین جدید
          </button>
          <div className='basis-3/4' />
        </div>
        {/* End: main Content */}
      </main>
      {/* End: mobile resp*/}
    </>
  );
};

export default Result;
