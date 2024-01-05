"use client";
import { useMachineInfoStore, useTransitionStore } from "@/app/store";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, memo, useState } from "react";

//TODO User shouldn't be able to enter repetitive states with same names
//TODO User shouldn't be able to enter repetitive alphabets with same names
//TODO we should remove the empty indexes because the user uses a lot of commas
type drawingSteps = 1 | 2 | 3;

const MachineInfo = ({ redirectPathname }: { redirectPathname: string }) => {
  // #region zustand states
  const states = useMachineInfoStore((state) => state._states);
  const alphabets = useMachineInfoStore((state) => state.alphabets);
  const initialState = useMachineInfoStore((state) => state.initialState);
  const finalStates = useMachineInfoStore((state) => state.finalStates);
  const addStates = useMachineInfoStore((state) => state.addState);
  const addAlphabet = useMachineInfoStore((state) => state.addAlphabet);
  const setInitialState = useMachineInfoStore((state) => state.setInitialState);
  const addFinalStates = useMachineInfoStore((state) => state.addFinalStates);
  const reset = useMachineInfoStore((state) => state.reset);
  const transitions = useTransitionStore((state) => state.transitions);
  const addTransition = useTransitionStore((state) => state.addTransition);
  const resetTransitions = useTransitionStore((state) => state.reset);

  // #endregion
  const [drawingStep, setDrawingStep] = useState<drawingSteps>(1);

  const router = useRouter();

  return (
    <div className='w-full mx-1 rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] border-b-2 border-x-2 border-darkColor'>
      <header className='text-xl w-full text-right font-bold rounded-t-[10px] text-white bg-darkMediumColor'>
        <span className='mr-6 py-4 block'>رسم ماشین</span>
      </header>
      <span className='block mt-6 mr-4 text-right'>
        ماشین را در سه مرحله رسم میکنیم
      </span>

      {/* From here the pages go dynamic : */}
      {drawingStep == 1 && (
        <>
          <span className='block text-right mt-6 mr-4 font-bold'>
            گام اول - ورود استیت ها و الفبا
          </span>
          <div className='text-right mr-4 mt-9 flex flex-row-reverse items-center'>
            <span className='font-bold'> :ورودی استیت ها</span>
            {"  "}
            <span className='text-sm font-normal'>
              در ورودی زیر استیت هارا نوشته و آن هارا با کاما(,) از هم جدا کنید
            </span>
          </div>
          <div className='mx-4 mt-2'>
            <Input
              onChange={(e) => addStates(e.target.value.split(","))}
              classNames={{
                input: "text-right text-lg",
                inputWrapper:
                  "bg-[#D9D9D9] h-12 focus-within:border-2 border-mediumColor",
              }}
              placeholder='q1,q2,...'
            />
          </div>
          <div className='text-right mr-4 mt-9 flex flex-row-reverse items-center'>
            <span className='font-bold'> :ورودی زبان</span>
            {"  "}
            <span className='text-sm font-normal'>
              در ورودی زیر زبان را نوشته و آن را با کاما(,) از هم جدا کنید
            </span>
          </div>
          <div className='mx-4 mt-2 mb-12'>
            <Input
              onChange={(e) => addAlphabet(e.target.value.split(","))}
              classNames={{
                input: "text-right text-lg",
                inputWrapper:
                  "bg-[#D9D9D9] h-12 focus-within:border-2 border-mediumColor",
              }}
              placeholder='a,b'
            />
          </div>
          <Button
            onPress={() => setDrawingStep(2)}
            className='ml-4 h-12 md:w-56 w-48 mb-9 bg-darkColor'
          >
            <span className='text-primaryColor font-semibold'>مرحله بعدی</span>
          </Button>
        </>
      )}

      {/* _________________________________________________________________ */}

      {/* Second step for getting machine info ↓ */}

      {drawingStep == 2 && (
        <>
          <span className='block text-right mt-6 mr-4 font-bold'>
            گام دوم - وارد کردن حالت ورودی و حالت پذیرش
          </span>
          <div className='text-right mr-4 mt-9 flex flex-row-reverse items-center'>
            <span className='font-bold'>: ورودی حالت ورودی</span>
            {"  "}
            <span className='text-sm font-normal'>
              از باکس زیر حالت ورودی را انتخاب کنید
            </span>
          </div>
          <div className='mx-4 mt-2'>
            <Select
              onChange={(e) => setInitialState([e.target.value])}
              labelPlacement='outside'
              classNames={{
                value: "text-center text-lg",
                trigger: "bg-[#D9D9D9] h-12",
                label: "font-semibold pl-10 lg:pl-20",
              }}
              aria-label='initial state'
            >
              {states.map((state) => (
                <SelectItem
                  key={state}
                  value={state}
                  className='text-center text-lg'
                >
                  {state}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className='text-right mr-4 mt-9 flex flex-row-reverse items-center'>
            <span className='font-bold'> ورودی پذیرش ها</span>
            {"  "}
            <span className='text-sm font-normal'>
              از باکس زیر حالت های پذیرش را انتخاب کنید{" "}
            </span>
          </div>
          <div className='mx-4 mt-2 mb-12'>
            <Select
              labelPlacement='outside'
              selectionMode='multiple'
              onChange={(e) => addFinalStates(e.target.value.split(","))}
              classNames={{
                value: "text-center text-lg",
                trigger: "bg-[#D9D9D9] h-12",
                label: "font-semibold pl-10 lg:pl-20",
              }}
              label={finalStates.length < 2 ? "انتخاب کنید" : ""}
              aria-label='final states'
            >
              {states.map((state) => (
                <SelectItem
                  key={state}
                  value={state}
                  className='text-lg text-center'
                >
                  {state}
                </SelectItem>
              ))}
            </Select>
          </div>

          <Button
            onPress={() => setDrawingStep(3)}
            className='ml-4 h-12 mt-10 lg:w-56 w-48 mb-9 bg-darkColor'
          >
            <span className='text-primaryColor font-semibold'>مرحله بعدی</span>
          </Button>
          <Button
            onPress={() => {
              setDrawingStep(1);
              reset();
              resetTransitions();
            }}
            className='ml-4 h-12 mt-10 lg:w-56 w-48 mb-9 bg-lightColor border-2 border-darkMediumColor'
          >
            <span className='text-darkColor font-semibold'>مرحله قبل</span>
          </Button>
        </>
      )}
      {/* _________________________________________________________________ */}

      {/* third step for getting machine info ↓ */}

      {drawingStep == 3 && (
        <section className='mb-20'>
          <span className='block text-right mt-6 mr-4 font-bold'>
            گام سوم - جدول انتقال ها
          </span>
          <table className='w-full mt-9 border border-collapse rounded-xl border-darkColor'>
            <thead className='bg-[#D9D9D9] h-16'>
              <tr>
                <th className='lg:text-xl md:text-lg'>States</th>
                {alphabets.map((alphabet) => {
                  return <th key={alphabet}>{alphabet}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {states.map((state) => (
                <tr>
                  <th scope='row' key={state} className='bg-[#D9D9D9]'>
                    {state}
                  </th>
                  {alphabets.map((alphabet) => (
                    <td>
                      <Select
                        name={`${state}-${alphabet}`}
                        aria-label={`${state}-${alphabet}`}
                        onChange={(event) => {
                          const selectedState = event.target.value;
                          addTransition({
                            from: state,
                            label: alphabet,
                            to: selectedState,
                          });
                        }}
                      >
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </Select>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* On this button the query will be sent */}
          <Button
            onPress={() => {
              console.log(
                "Transitions Before the redirect : ",
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
              return router.push(redirectPathname);
            }}
            className='ml-4 h-12 lg:w-56 w-48 mb-9 bg-darkColor'
          >
            <span className='text-primaryColor font-semibold'>مرحله بعدی</span>
          </Button>
          <Button
            onPress={() => setDrawingStep(2)}
            className='ml-4 h-12 lg:w-56 w-48 my-9 bg-lightColor border-2 border-darkMediumColor'
          >
            <span className='text-darkColor font-semibold'>مرحله قبل</span>
          </Button>
        </section>
      )}
    </div>
  );
};

export default memo(MachineInfo);
