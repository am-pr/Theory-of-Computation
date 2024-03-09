"use client";
// TODO main page of the app should be designed here
import React from "react";

import background from "@/public/background/background.jpg";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


export default function Home() {
  return (
    <>
      <main>
        <p className='absolute z-30 text-center text-primaryColor text-8xl font-bold w-full mt-16'>
          Automata Maker
        </p>

        <p className='absolute z-30 text-center text-primaryColor text-3xl font-bold w-full top-[21%]'>
          ساخت راحت ، تبدیل سریع
        </p>
        
        <TypeAnimation
          className='absolute z-30 text-center text-5xl font-bold w-full bottom-[45%]'
          sequence={[1000, "همین حالا ماشین خودتو بساز"]}
          wrapper='span'
          cursor={true}
          speed={22}
          style={{ fontSize: "3rem", display: "inline-block", color: "#F4CE14" }}
        />

        <div className='w-full items-center flex justify-center'>

          <Link
            href={"/AutomataMaker"}
            className='btnfos btnfos-1 absolute z-30 top-[60%] right-1/2 translate-x-1/2 bg-primaryColor/70 text-center rounded-xl overflow-hidden'
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
      <main className="bg-[#57595D] h-screen">
        <p className="text-primaryColor text-5xl w-full text-center p-14 font-bold">عملگـــرها</p>
        <div className="flex justify-center  ">
          <div className="grid grid-cols-3 gap-48">
            <div className="flex justify-center items-center ">
              <Link href={'/Paziresh'}>
                <img src='/homepage/icons/stringAccepterIcon.svg' alt="stringAccepter icon" height='180px' width='180px'/>
                <p className="text-white w-[180px] flex justify-center absolute mt-6 font-bold">پذیرش رشته</p>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link href={'/Minimize'}>
                <img src='/homepage/icons/minimizeIcon.svg' alt="minimize icon" height='160px' width='160px'/>
                <p className="text-white w-[180px] flex justify-center absolute mt-6 font-bold">مینیمایز کردن</p>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link href={'/Compliment'}>
                <img src='/homepage/icons/complimentIcon.svg' alt="compliment icon" height='150px' width='150px'/>
                <p className="text-white w-[180px] flex justify-center absolute mt-6 font-bold">متمم گرفتن</p>

              </Link>
            </div>
          </div>
        </div>


        <p className="text-primaryColor text-5xl w-full text-center p-16 mt-14 font-bold">ابـــــــــزار ها</p>
        <div className="flex justify-center  ">
          <div className="grid grid-cols-3 gap-48 ">
            <div className="flex justify-center ">
              <Link href={'/Ejtema'}>
                <img src='/homepage/icons/unionIcon.svg' alt="union icon" height='180px' width='180px'/>
                <p className="text-white w-[180px] flex justify-center absolute mt-6 font-bold">اجتماع</p>

              </Link>
            </div>
            <div className="flex justify-center">
              <Link href={'/Eshterak'}>
                <img src='/homepage/icons/intersectionIcon.svg' alt="intersection icon" height='160px' width='160px'/>
                <p className="text-white w-[180px] flex justify-center absolute mt-6 font-bold">اشتراک</p>

              </Link>
            </div>
            <div className="flex justify-center">
              <Link href={'/Tafazol'}>
                <img src='/homepage/icons/minusIcon.svg' alt="minus icon" height='150px' width='150px'/>
                <p className="text-white w-[180px] flex justify-center absolute mt-6 font-bold">تفاضل</p>

              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
