import React from "react";

export default function Home() {
  return (
    <main>
      <img
        className='md:hidden'
        src='/wave-haikei.png'
        alt='wave'
      />
      <h1 className='text-3xl fixed top-3 right-6 block font-sans font-bold md:hidden text-primary-color'>
        ماشین
      </h1>
    </main>
  );
}
