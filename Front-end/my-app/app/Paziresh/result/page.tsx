"use client";
import { useMachineInfoStore, useTransitionStore } from "@/app/store";
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

  return <div>Result</div>;
};

export default Result;
