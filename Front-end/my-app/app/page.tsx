// TODO main page of the app should be designed here
import React from "react";

import MainFrame from "@/components/MainFrame";
import background from "@/public/background/background.jpg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
// import '../public/buttonCss/'

export default function Home() {
  return (
    <main className=''>
      <p className='absolute z-30 text-center text-primaryColor text-8xl font-bold w-full mt-16'>
        Automata Maker
      </p>
      <p className='absolute z-30 text-center text-primaryColor text-5xl font-bold w-full mt-[25rem]'>
        همین حالا ماشین بساز
      </p>
      <div className='w-full items-center flex justify-center '>
        <Button
          className='absolute z-30 bg-primaryColor/70 border-white mt-[61rem] border-solid border-2 '
          size='lg'
        >
          <p className='text-white text-xl'>رسم ماشین</p>
        </Button>

        {/* <a class="btnfos btnfos-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
          Hover
        </a>  */}
      </div>

      <a
        className='absolute z-30 text-primaryColor text-3xl font-bold w-full mt-[44rem] pl-10 '
        href='#'
      >
        این سایت چیکار می کنه؟{" "}
      </a>

      {/* <background> */}
      <div className='w-full h-screen bg-[#45474B]/25 z-20 absolute' />
      <div className='w-full h-screen bg-black/65 z-10 absolute' />
      <Image
        src={background}
        alt='background'
        className='w-full h-screen z-0'
        quality={100}
      />
      {/* </background> */}
    </main>
  );
}
