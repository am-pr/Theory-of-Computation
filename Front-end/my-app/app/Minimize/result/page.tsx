"use client";
import { useMachineInfoStore, useTransitionStore } from "@/app/store";
import MachineDrawer from "@/components/MachineDrawer";
import MainFrame from "@/components/MainFrame";
import { Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Result = () => {
  const [inputString, setInputString] = useState("");
  const [isStringValid, setIsStringValid] = useState(true);

  const { push } = useRouter();

  const states = useMachineInfoStore((state) => state._states);
  const alphabets = useMachineInfoStore((state) => state.alphabets);
  const initialState = useMachineInfoStore((state) => state.initialState);
  const finalStates = useMachineInfoStore((state) => state.finalStates);
  const transitions = useTransitionStore((state) => state.transitions);
  const resetTransitions = useTransitionStore((state) => state.reset);
  const resetMachine = useMachineInfoStore((state) => state.reset);

  useEffect(() => {
    if (inputString.length > 0 && !regex.test(inputString)) {
      setIsStringValid(false);
    } else {
      setIsStringValid(true);
    }
  }, [inputString]);

  //The regex pattern that only accepts the alphabets
  const regex = new RegExp(`^[${alphabets.join("")}]*$`);

  // here we handle the string confirmation from tha API
  function handleUserString() {
    // a request to API with answer will come here
    setInputString("");
  }
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

  // Optimize states (key names are changed to be compatible with VIS.js)
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
      <section className='flex gap-x-2 justify-between'>
        <MachineDrawer
          transitions={transitions}
          states={optimizedState}
          initialState={initialState}
          finalStates={finalStates}
        />
        <MachineDrawer
          transitions={transitions}
          states={optimizedState}
          initialState={initialState}
          finalStates={finalStates}
        />
      </section>
    </MainFrame>
  );
};

export default Result;
