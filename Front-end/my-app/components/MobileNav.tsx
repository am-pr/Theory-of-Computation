"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type State = "tool" | "operation" | null;
type Operation = "ejtema" | "eshterak" | "tafazol" | null;
type Tool = "paziresh" | "minimize" | "compliment" | null;

const MobileNav = () => {
  const [state, setState] = useState<State>(null);
  const [operation, setOperation] = useState<Operation>(null);
  const [tool, setTool] = useState<Tool>(null);
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <>
      {/* main nav starts here ↓ */}
      <main className='md:hidden fixed shadow-[0_-4px_20px_0_rgba(0,0,0,0.15)] bottom-0 flex w-full h-14 z-10'>
        <div
          onClick={() => setState(state === "tool" ? null : "tool")}
          className={`${
            state === "tool" ? "bg-darkMediumColor" : "bg-darkColor"
          } basis-1/2 transition-colors flex flex-col justify-center items-center`}
        >
          <img className='select-none' src='/tools-icon.svg' alt='tools' />
          <span className='text-primaryColor select-none font-black text-xs mt-1'>
            ابـــــــــزار
          </span>
        </div>
        <div
          onClick={() => setState(state === "operation" ? null : "operation")}
          className={`${
            state === "operation" ? "bg-darkMediumColor" : "bg-darkColor"
          } basis-1/2 transition-colors flex flex-col justify-center items-center`}
        >
          <img
            className='select-none'
            src='/operations-icon.svg'
            alt='operations'
          />
          <span className='text-primaryColor select-none font-black text-xs mt-1'>
            عملگـــرها
          </span>
        </div>
      </main>
      {/* main nav ends here ↑ */}

      {/* the logo container */}
      <section
        // TODO need a picture or logo for the main button ↓
        onClick={() => {
          push("/");
          setOperation(null);
          setState(null);
          setTool(null);
          setState(null);
        }}
        className='bg-[#D9D9D9] md:hidden z-20 fixed bottom-0 size-14 left-1/2 -translate-x-[18px] rounded-full'
      >
        <img className='rounded-full' src='/DFA-Logo.png' alt='logo' />
      </section>

      {/* the tools */}
      <section
        className={`md:hidden fixed bottom-0 flex justify-around items-center w-full h-10 ease-in transition-transform bg-darkMediumColor ${
          state === "tool" ? "-translate-y-14" : "translate-y-0"
        }`}
      >
        <div
          onClick={() => {
            push(`${tool === "compliment" ? "/" : "/Compliment"}`);
            setTool(tool === "compliment" ? null : "compliment");
          }}
          className={`${
            tool === "compliment" && pathname === "/Compliment"
              ? "bg-secondaryColor"
              : ""
          } p-1 transition-colors flex items-center rounded-lg`}
        >
          <span className='text-primaryColor mr-1 select-none text-xs'>
            متمم گرفتن
          </span>
          <img
            className={`${
              tool === "compliment" && pathname === "/Compliment"
                ? "invert"
                : ""
            }`}
            src='/Compliment 1.svg'
            alt=''
          />
        </div>
        <div
          onClick={() => {
            push(`${tool === "minimize" ? "/" : "/Minimize"}`);
            setTool(tool === "minimize" ? null : "minimize");
          }}
          className={`${
            tool === "minimize" && pathname === "/Minimize"
              ? "bg-secondaryColor"
              : ""
          } p-1 transition-colors flex items-center rounded-lg`}
        >
          <span className='text-primaryColor mr-1 select-none text-xs'>
            مینامیز کردن
          </span>
          <img src='/solar_minimize-square-outline.svg' alt='' />
        </div>
        <div
          onClick={() => {
            push(`${tool === "paziresh" ? "/" : "/Paziresh"}`);
            setTool(tool === "paziresh" ? null : "paziresh");
          }}
          className={`${
            tool === "paziresh" && pathname === "/Paziresh"
              ? "bg-secondaryColor"
              : ""
          } p-1 transition-colors flex items-center rounded-lg`}
        >
          <span className='text-primaryColor mr-1 select-none text-xs'>
            پذیرش رشته
          </span>
          <img src='/codicon_symbol-string.svg' alt='' />
        </div>
      </section>

      {/* the operations */}
      <section
        className={`md:hidden fixed bottom-0 flex justify-around items-center w-full h-9 ease-in transition-transform bg-darkMediumColor ${
          state === "operation" ? "-translate-y-14" : "translate-y-0"
        }`}
      >
        <div
          onClick={() => {
            push(`${operation === "tafazol" ? "/" : "/Tafazol"}`);
            setOperation(operation === "tafazol" ? null : "tafazol");
          }}
          className={`${
            operation === "tafazol" && pathname === "/Tafazol"
              ? "bg-secondaryColor"
              : ""
          } p-1 transition-colors flex items-center rounded-lg`}
        >
          <span className='text-primaryColor mr-1 select-none text-xs'>
            تفاضل گرفتن
          </span>
          <img src='/subway_subtraction-1.svg' alt='' />
        </div>
        <div
          onClick={() => {
            push(`${operation === "eshterak" ? "/" : "/Eshterak"}`);
            setOperation(operation === "eshterak" ? null : "eshterak");
          }}
          className={`${
            operation === "eshterak" && pathname === "/Eshterak"
              ? "bg-secondaryColor"
              : ""
          } p-1 transition-colors flex items-center rounded-lg`}
        >
          <span className='text-primaryColor mr-1 select-none text-xs'>
            اشتراک
          </span>
          <img src='/icon-park-solid_intersection.svg' alt='' />
        </div>
        <div
          onClick={() => {
            push(`${operation === "ejtema" ? "/" : "/Ejtema"}`);
            setOperation(operation === "ejtema" ? null : "ejtema");
          }}
          className={`${
            operation === "ejtema" && pathname === "/Ejtema"
              ? "bg-secondaryColor"
              : ""
          } p-1 transition-colors flex items-center rounded-lg`}
        >
          <span className='text-primaryColor mr-1 select-none text-xs'>
            اجتماع
          </span>
          <img src='/teenyicons_layers-union-solid.svg' alt='' />
        </div>
      </section>
    </>
  );
};

export default MobileNav;
