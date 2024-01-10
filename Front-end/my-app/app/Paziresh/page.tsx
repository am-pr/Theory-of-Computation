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
    <>
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
            گام اول
          </span>
          <span className='block text-right mt-2 mx-4 mb-[1.625rem] text-sm '>
            در این گام شما ابتدا ماشین مورد نظر خود را که قرار است رشته را
            بپذیرد رسم میکنید
          </span>

          <div className='mx-4'>
            <MachineInfo redirectPathname='/Paziresh/result' />
            {/* Edit machineInfo for mobile responsive */}
          </div>
        </div>
        {/* End: main Content */}
      </main>
      {/* End: mobile resp*/}
    </>
  );
};

export default StringAccepter;
