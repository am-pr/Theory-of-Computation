"use client";
import Link from "next/link";
import React, { useState } from "react";

const SideBar = () => {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isOperationsOpen, setIsOperationsOpen] = useState(false);
  return (
    <>
      <nav className='hidden md:flex h-full w-60 justify-center items-center fixed right-9'>
        <section className='grow'>
          <div
            onClick={() => setIsToolsOpen(!isToolsOpen)}
            className={`${
              isToolsOpen ? "bg-darkMediumColor" : ""
            } bg-darkColor shadow-[0_0_20px_0_rgba(0,0,0,0.4)] cursor-pointer hover:shadow-[0_0_40px_0_rgba(0,0,0,0.5)] transition-all w-full h-28 rounded-xl flex justify-center items-center`}
          >
            <span className='text-center text-primaryColor text-2xl font-bold'>
              ابـــــــــزار
            </span>
          </div>
          {/* drop down for tools  */}
          <div
            className={`${
              isToolsOpen ? "h-[150px]" : "h-0"
            } transition-height duration-1000 mt-4 bg-darkColor shadow rounded-xl flex justify-center items-center overflow-hidden`}
          >
            <div className='divide-y-2 divide-darkMediumColor flex-col grow justify-center h-full items-center'>
              <div className='bg-darkColor h-1/3 cursor-pointer hover:translate-x-2 transition-transform flex items-center justify-center'>
                <span className='text-primaryColor font-semibold mx-2'>
                  پذیرش رشته
                </span>
                <img
                  src='/codicon_symbol-string.svg'
                  alt=''
                />
              </div>
              <div className='bg-darkColor h-1/3 cursor-pointer hover:translate-x-2 transition-transform flex items-center justify-center'>
                <span className='text-primaryColor font-semibold mx-2'>
                  مینیمایز کردن
                </span>
                <img
                  src='/solar_minimize-square-outline.svg'
                  alt=''
                />
              </div>
              <div className='bg-darkColor h-1/3 cursor-pointer hover:translate-x-2 transition-transform flex items-center justify-center'>
                <span className='text-primaryColor font-semibold mx-2'>
                  متمم گرفتن
                </span>
                <img
                  src='/Compliment 1.svg'
                  alt=''
                />
              </div>
            </div>
          </div>

          {/* end of the drop down */}
          <div
            onClick={() => setIsOperationsOpen(!isOperationsOpen)}
            className={`${
              isOperationsOpen ? "bg-darkMediumColor" : "bg-darkColor"
            } mt-9 cursor-pointer shadow-[0_0_20px_0_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_0_rgba(0,0,0,0.5)] transition-all w-full h-28 rounded-xl flex justify-center items-center`}
          >
            <span className='text-center text-primaryColor text-2xl font-bold'>
              عملگـــرها
            </span>
          </div>
          {/* drop down for operations  */}
          <div
            className={`${
              isOperationsOpen ? "h-[150px]" : "h-0"
            } transition-height duration-1000 mt-4 bg-darkColor shadow rounded-xl flex justify-center items-center overflow-hidden`}
          >
            <div className='divide-y-2 divide-darkMediumColor flex-col grow justify-center h-full items-center'>
              <Link href='/Ejtema'>
                <div className='bg-darkColor h-1/3 cursor-pointer hover:translate-x-2 transition-transform flex items-center justify-center'>
                  <span className='text-primaryColor font-semibold mx-2'>
                    اجتماع{" "}
                  </span>
                  <img
                    src='/teenyicons_layers-union-solid.svg'
                    alt=''
                  />
                </div>
              </Link>
              <div className='bg-darkColor h-1/3 cursor-pointer hover:translate-x-2 transition-transform flex items-center justify-center'>
                <span className='text-primaryColor font-semibold mx-2'>
                  اشتراک{" "}
                </span>
                <img
                  src='/icon-park-solid_intersection.svg'
                  alt=''
                />
              </div>
              <div className='bg-darkColor h-1/3 cursor-pointer hover:translate-x-2 transition-transform flex items-center justify-center'>
                <span className='text-primaryColor font-semibold mx-2'>
                  تفاضل{" "}
                </span>
                <img
                  src='/subway_subtraction-1.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
          {/* end of the drop down */}
        </section>
      </nav>
      {/* for the colored part  */}
      <main className='bg-darkColor hidden md:block fixed top-0 h-[560px] w-full -z-10'>
        <h1 className='text-primaryColor text-4xl font-bold relative left-10 top-5'>
          ماشین
        </h1>
      </main>
      {/* end of the colored part  */}
    </>
  );
};

export default SideBar;
