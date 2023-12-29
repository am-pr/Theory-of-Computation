"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

type drawingSteps = 1 | 2 | 3;

const MachineInfo = () => {
  const [drawingStep, setDrawingStep] = useState<drawingSteps>(1);
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
    </div>
  );
};

export default MachineInfo;
