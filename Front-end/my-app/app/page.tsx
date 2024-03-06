"use client";
// TODO main page of the app should be designed here
import React from "react";

import background from "@/public/background/background.jpg";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className=''>
      <p className='absolute z-30 text-center text-primaryColor text-8xl font-bold w-full mt-16'>
        Automata Maker
      </p>

      {/* <p className='absolute z-30 text-center text-primaryColor text-5xl font-bold w-full mt-[25rem]'>
        همین حالا ماشین بساز
      </p> */}
      <TypeAnimation
        className='absolute z-30 text-center text-5xl font-bold w-full mt-[25rem]'
        sequence={[1000, "همین حالا ماشین خودتو بساز"]}
        wrapper='span'
        cursor={true}
        speed={20}
        style={{ fontSize: "3rem", display: "inline-block", color: "#F4CE14" }}
      />

      <div className='w-full items-center flex justify-center'>
        {/* <Button
          variant='shadow'
          className='absolute z-30 bg-primaryColor/70 border-white mt-[61rem] border-solid border-2 '
          size='lg'
        >
          <p className='text-white text-xl'>رسم ماشین</p>
        </Button> */}

        <Link
          href={"/AutomataMaker"}
          className='btnfos btnfos-1 absolute z-30 top-[57%] right-1/2 translate-x-1/2 bg-primaryColor/70 text-center rounded-xl overflow-hidden'
        >
          <svg>
            <rect x='0' y='0' fill='none' width='100%' height='100%' />
          </svg>
          رسم ماشین
        </Link>
      </div>

      <a
        className='absolute z-30 text-primaryColor text-3xl font-bold w-full bottom-[7%] pl-10 '
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
