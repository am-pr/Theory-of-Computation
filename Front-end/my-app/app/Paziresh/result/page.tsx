"use client";
import { useMachineInfoStore, useTransitionStore } from "@/app/store";
import MachineDrawer from "@/components/MachineDrawer";
import MainFrame from "@/components/MainFrame";
import { Chip } from "@nextui-org/react";
import React from "react";

const Result = () => {
  const states = useMachineInfoStore((state) => state._states);
  const alphabets = useMachineInfoStore((state) => state.alphabets);
  const initialState = useMachineInfoStore((state) => state.initialState);
  const finalStates = useMachineInfoStore((state) => state.finalStates);
  const transitions = useTransitionStore((state) => state.transitions);

  console.log(
    "Transitions : ",
    transitions,
    "\n",
    "\nstates :",
    states,
    "\nalphabets :",
    alphabets,
    "\ninitialState :",
    initialState,
    "\nfinalStates :",
    finalStates
  );
  //TODO make an optimized transitions array so if the 'from' and 'to' keys are the same it will make it one object : {from:'A' , to:'A' , label:'a,b'}
  // or I can make this changes in the store
  const optimizedState = states.map((state) => ({ id: state, label: state }));

  return (
    <MainFrame>
      <header className='flex justify-between'>
        <Chip
          classNames={{ base: "bg-darkMediumColor", content: "text-white" }}
          variant='solid'
        >
          مرحله ۲ از ۲
        </Chip>
        <h1 className='text-2xl font-black text-darkColor'>پذیرش رشته</h1>
      </header>
      <span className='font-medium mt-9 block text-right'>
        :پذیرش رشته شامل دو گام است
      </span>
      <span className='block font-bold text-right mt-2'>گام دوم</span>
      <span className='block text-right mt-1 mr-6 font-medium mb-6'>
        در این گام رشته(رشته‌ها) مورد نظر خود را وارد کنید.
      </span>
      <MachineDrawer
        transitions={transitions}
        states={optimizedState}
        initialState={initialState}
        finalStates={finalStates}
      />
    </MainFrame>
  );
};

export default Result;
