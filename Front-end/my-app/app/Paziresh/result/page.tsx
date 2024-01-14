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
    <>
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
        <div className='mt-6 flex'>
          <button
            disabled={!isStringValid || inputString.length === 0}
            onClick={handleUserString}
            className='basis-1/4 bg-darkColor disabled:cursor-not-allowed disabled:opacity-80 font-semibold md:text-lg rounded-l-lg text-primaryColor hover:bg-darkMediumColor transition-all active:scale-95'
          >
            بررسی
          </button>
          <input
            onChange={(e) => setInputString(e.target.value)}
            placeholder='در این قسمت رشته را وارد کنید'
            dir='rtl'
            className='basis-3/4 bg-[#D9D9D9] p-4 placeholder:text-darkColor rounded-r-xl outline-none'
            type='text'
          />
        </div>
        {/* Here we valid that the string in a subset of alphabets or not */}
        <div
          className={`${
            !isStringValid ? "visible text-center text-red-500" : "invisible"
          }`}
        >
          رشته ی داده شده با زبان ماشین مطابقت ندارد
        </div>

        {/* Here the user strings come and is waiting for its confirmation ↓ */}
        <section className='my-4'>123</section>
        <div className='flex'>
          <button
            onClick={() => (
              resetTransitions(), resetMachine(), push("/Paziresh")
            )}
            className='basis-1/4 bg-darkColor p-4 font-semibold md:text-lg rounded-lg text-primaryColor hover:bg-darkMediumColor transition-all active:scale-95'
          >
            طراحی ماشین جدید
          </button>
          <div className='basis-3/4' />
        </div>
      </MainFrame>

      {/* mobile responsive */}
      <main className='md:hidden mb-20'>
        {/* header */}
        <header className=' h-[8.75rem] w-full bg-darkColor flex justify-between'>
          <Chip
            className='text-[10px] mt-[6.125rem] ml-4'
            classNames={{ base: "bg-darkMediumColor", content: "text-white" }}
            variant='solid'
          >
            مرحله ۱ از ۲
          </Chip>
          <h1 className='text-xl font-black text-primaryColor mr-[1.75rem] mt-[3.625rem]'>
            پذیرش رشته
          </h1>
        </header>
        {/* End: header */}

        {/* main Content */}
        <div>
          <span className='font-medium   text-sm flex justify-end mt-6 mr-4'>
            :پذیرش رشته شامل دو گام است
          </span>
          <span className='font-bold text-sm  flex justify-end mr-4 mt-6'>
            گام دوم
          </span>
          <span className='block text-right mt-2 mx-4 mb-11 text-sm '>
            در این گام رشته(رشته‌ها) مورد نظر خود را وارد کنید
          </span>
          <MachineDrawer
            transitions={transitions}
            states={optimizedState}
            initialState={initialState}
            finalStates={finalStates}
            className='mx-4 h-[17.357rem]'
          />

          <div className='flex justify-end mt-6 mx-4'>
            <p className='font-bold whitespace-nowrap text-sm'>
              ورودی رشته:
              <span className=' text-sm font-normal whitespace-normal'>
                {"  "}
                در باکس زیر رشته مورد نظر را وارد کنید
              </span>
            </p>
          </div>

          <div className='flex mt-1 mx-4'>
            <button
              disabled={!isStringValid || inputString.length === 0}
              onClick={handleUserString}
              className='basis-1/4 bg-darkColor disabled:cursor-not-allowed disabled:opacity-80 font-semibold md:text-lg rounded-l-lg text-primaryColor hover:bg-darkMediumColor transition-all active:scale-95'
            >
              بررسی
            </button>

            <input
              onChange={(e) => setInputString(e.target.value)}
              placeholder='در این قسمت رشته را وارد کنید'
              dir='rtl'
              className='basis-3/4 bg-[#D9D9D9] p-4 placeholder:text-darkColor rounded-r-xl outline-none'
              type='text'
            />
          </div>

          {/* Here we valid that the string in a subset of alphabets or not */}
          <div
            className={`${
              !isStringValid ? "visible text-center text-red-500" : "invisible"
            }`}
          >
            رشته ی داده شده با زبان ماشین مطابقت ندارد
          </div>

          {/* Here the user strings come and is waiting for its confirmation ↓ */}
          <section className=''>123</section>

          <div className='flex mb-[7.3125rem] mx-4'>
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
        </div>
        {/* End: main Content */}
      </main>
      {/* End: mobile resp*/}
    </>
  );
};

export default Result;
