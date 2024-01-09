"use client";
import { useMachineInfoStore, useTransitionStore } from "@/app/store";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, memo, useState } from "react";

//TODO User shouldn't be able to enter repetitive states with same names
//TODO User shouldn't be able to enter repetitive alphabets with same names
//TODO we should remove the empty indexes because the user uses a lot of commas
type drawingSteps = 1 | 2 | 3;

const MachineInfo = ({
  redirectPathname,
  className,
}: {
  redirectPathname: string;
  className?: string;
}) => {
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
    <div
      className={`${className} w-full md:mx-1 rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] border-b-2 border-x-2 border-darkColor`}
    >
      <header className='md:text-xl text-base w-full text-right font-bold rounded-t-[10px] text-white bg-darkMediumColor'>
        <span className='md:mr-6 mr-3 py-4 block'>رسم ماشین</span>
      </header>
      <span className='block md:mt-6 mt-4 md:mr-4 mr-3 text-right md:text-base text-xs'>
        ماشین را در سه مرحله رسم میکنیم
      </span>

      {/* From here the pages go dynamic : */}
      {drawingStep == 1 && (
        <>
          <span className='block text-right mt-6 md:mr-4 mr-3 font-bold md:text-base text-sm'>
            گام اول - ورود استیت ها و الفبا
          </span>
          <div className='text-right  md:mr-4 mx-3 md:mt-9 mt-6 flex flex-row-reverse items-center md:text-base text-sm '>
              <p className='font-bold whitespace-nowrap text-sm md:text-base'>
                 ورودی استیت ها: 
                <span  className='md:text-sm text-xs font-normal whitespace-normal'> 
                  {"  "}
                  در ورودی زیر ، استیت ها را نوشته و با کاما(,) آنها را از یکدیگر جدا کنید
                </span>
              </p> 
          </div>
          {/*TODO: resize the input: size of input is too big for mobile view */}
          <div className='mx-4 mt-2 '>
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
            <p className='font-bold whitespace-nowrap text-sm md:text-base'>
                 ورودی زبان: 
                <span  className='md:text-sm text-xs font-normal whitespace-normal'> 
                  {"  "}
                  در ورودی زیر ، زبان را نوشته و با کاما(,) آنها را از یکدیگر جدا کنید
                </span>
              
            </p> 
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
          <div className="flex justify-end mr-4">
            <Button
              isDisabled={states.length === 0 || alphabets.length === 0}
              disableAnimation
              onPress={() => setDrawingStep(2)}
              className='md:ml-4 h-12 md:w-56 w-48 mb-9 bg-darkColor'
            >
              <span className='text-primaryColor font-semibold '>مرحله بعدی</span>
            </Button>
          </div>
        </>
      )}

      {/* _________________________________________________________________ */}

      {/* Second step for getting machine info ↓ */}

      {drawingStep == 2 && (
        <>
          <span className='block text-right mt-6 md:mr-4 mr-3 font-bold md:text-base text-sm'>
            گام دوم - وارد کردن حالت ورودی و حالت پذیرش
          </span>
          <div className='text-right md:mr-4 mx-3 md:mt-9 mt-6 flex flex-row-reverse items-center md:text-base text-xs'>
            <span className='font-bold'> حالت ورودی: {"  "}
              <span className='md:text-sm font-normal'>
                از باکس زیر حالت ورودی را انتخاب کنید
              </span>
            </span>
            {"  "}
          </div>
          <div className='md:mx-4 mx-3 md:mt-2 mt-1'>
            <Select
              isRequired
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
          <div className='text-right md:mr-4 mr-3 mt-9 flex flex-row-reverse items-center md:text-base text-xs'>
            <span className='font-bold'>  ورودی پذیرش ها:{"  "}
              <span className='md:text-sm font-normal'>

                از باکس زیر حالت های پذیرش را انتخاب کنید
              </span>
            </span>
          </div>
          <div className='md:mx-4 mx-3 md:mt-2  md:mb-12'>
            <Select
              isRequired
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

              <div className="flex md:justify-end">
                <Button
                  onPress={() => {
                    setDrawingStep(1);
                    reset();
                    resetTransitions();
                  }}
                  className='ml-4  h-12 md:mt-10 mt-[5.5rem] lg:w-56 w-48 md:mb-9 mb-6 bg-lightColor border-2 border-darkMediumColor'
                >
                  <span className='text-darkColor font-semibold'>مرحله قبل</span>
                </Button>
                <Button
                  isDisabled={
                    initialState[0].length === 0 || finalStates.length === 0
                  }
                  onPress={() => setDrawingStep(3)}
                  className='md:ml-4 mx-4 h-12 md:mt-10 mt-[5.5rem] lg:w-56 w-48 md:mb-9 mb-4 bg-darkColor'
                >
                  <span className='text-primaryColor font-semibold'>مرحله بعدی</span>
                </Button>

              </div>
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
                  <th
                    scope='row'
                    key={state}
                    className='bg-[#D9D9D9]'
                  >
                    {state}
                  </th>
                  {alphabets.map((alphabet) => (
                    <td>
                      <Select
                        required
                        key={`${state}-${alphabet}`}
                        isRequired={true}
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
                          <SelectItem
                            key={state}
                            value={state}
                          >
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
          {transitions.length !== alphabets.length * states.length &&
          transitions.length > 1 ? (
            <div
              dir='rtl'
              className='text-red-500 mx-auto my-2'
            >
              <span className='flex justify-center'>
                اطلاعات داده شده برای رسم یک DFA کامل نمی باشد !
              </span>
            </div>
          ) : (
            ""
          )}
          <Button
            type='submit'
            isDisabled={transitions.length !== alphabets.length * states.length}
            onPress={() => {
              //TODO remove this log before deploy
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
