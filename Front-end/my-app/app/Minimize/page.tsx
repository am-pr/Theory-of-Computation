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
    <>
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
            مینیمایز کردن
          </h1>
        </header>
        {/* End: header */}

        {/* main Content */}
        <div>
          <span className='font-medium   text-sm flex justify-end mt-6 mr-4 mb-6'>
            ماشین را رسم کنید
          </span>

          <div className='mx-4'>
            <MachineInfo redirectPathname='/Minimize/result' />
            {/* Edit machineInfo for mobile responsive */}
          </div>
        </div>
        {/* End: main Content */}
      </main>
      {/* End: mobile resp*/}
    </>
  );
};

export default Minimize;
