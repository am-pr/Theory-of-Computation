"use client";
import { Button } from "@mantine/core";
import SecondPage from "./secondPage";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useHover, useScrollIntoView } from "@mantine/hooks";

export default function Home() {
  const { hovered, ref } = useHover();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
    duration: 2900,
  });

  return (
    <>
      <main className='h-screen w-full bg-[url("../public/homepage/background/background.jpg")] bg-cover bg-fixed'>
        <p className='absolute z-30 text-center text-primaryColor text-8xl font-bold w-full mt-16'>
          Automata Maker
        </p>

        <p className='absolute z-30 text-center text-primaryColor text-3xl font-bold w-full top-[21%]'>
          ساخت راحت ، تبدیل سریع
        </p>

        <TypeAnimation
          className='absolute z-30 text-center text-5xl font-bold w-full bottom-[45%]'
          sequence={[300, "همین حالا", 555, "ماشین خودتو بساز"]}
          deletionSpeed={44}
          wrapper='span'
          cursor={true}
          speed={22}
          style={{
            fontSize: "3rem",
            display: "inline-block",
            color: "#F4CE14",
          }}
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

        <p
          className='absolute z-30 text-primaryColor text-3xl font-bold w-full bottom-[7%] pl-10 
          underline underline-offset-[0.9rem] hover:text-primaryColorLight hover:cursor-pointer'
          onClick={() =>
            scrollIntoView({
              alignment: "center",
            })
          }
        >
          این سایت چیکار می کنه؟
        </p>

        {/* #region background filters */}
        <div className='w-full h-screen bg-[#45474B]/25 z-20 absolute' />
        <div className='w-full h-screen bg-black/65 z-10 absolute' />
        {/* #endregion */}
      </main>

      <SecondPage />

      <main className=' w-full h-screen bg-darkColor' ref={targetRef}>
        <div className='w-full h-screen flex justify-center items-center'>
          <picture ref={ref}>
            <img
              src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif'
              alt='🤔'
              width='250'
              height='250'
            />

            {/* { hovered ?
          <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif" alt="🤔" width="100" height="100"/>
          :
          <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/emoji.svg" alt="ss" width="100" height="100"/>
        } */}
          </picture>
        </div>
      </main>
    </>
  );
}
