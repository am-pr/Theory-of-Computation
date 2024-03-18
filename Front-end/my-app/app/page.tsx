"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

//motion variants :
const imgVariants = {
  hidden: {
    opacity: 0,
    color: "rgba(0,0,0,0)",
  },
  visible: {
    opacity: 1,
    color: "#f4ce14",
    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
};

export default function Home() {
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

        <a
          className='absolute z-30 text-primaryColor text-3xl font-bold w-full bottom-[7%] pl-10 '
          href='#'
        >
          این سایت چیکار می کنه؟
        </a>

        {/* #region background filters */}
        <div className='w-full h-screen bg-[#45474B]/25 z-20 absolute' />
        <div className='w-full h-screen bg-black/65 z-10 absolute' />
        {/* #endregion */}
      </main>

      <main className='bg-darkColor h-screen'>
        <motion.p
          className='text-primaryColor text-5xl w-full text-center p-14 pt-20 font-bold'
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          whileInView={{
            opacity: 1,
            y: "0",
          }}
        >
          عملگـــرها
        </motion.p>
        <div className='flex justify-center items-center'>
          <div className='grid grid-cols-3 gap-48'>
            <Link
              className='flex flex-col justify-center items-center'
              href={"/Paziresh"}
            >
              <motion.img
                variants={imgVariants}
                whileInView='visible'
                initial='hidden'
                src='/homepage/icons/stringAccepterIcon.svg'
                alt='stringAccepter icon'
                height='180px'
                width='180px'
              />
              <motion.p
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                className='text-white w-[180px] text-center mt-4 font-bold'
              >
                پذیرش رشته
              </motion.p>
            </Link>

            <Link
              className='flex flex-col justify-center items-center'
              href={"/Minimize"}
            >
              <motion.img
                variants={imgVariants}
                whileInView='visible'
                initial='hidden'
                src='/homepage/icons/minimizeIcon.svg'
                alt='minimize icon'
                height='160px'
                width='160px'
              />
              <motion.p
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                className='text-white w-[180px] text-center mt-6 font-bold'
              >
                مینیمایز کردن
              </motion.p>
            </Link>
            <div>
              <Link
                className='flex flex-col justify-center items-center'
                href={"/Compliment"}
              >
                <motion.img
                  variants={imgVariants}
                  whileInView='visible'
                  initial='hidden'
                  src='/homepage/icons/complimentIcon.svg'
                  alt='compliment icon'
                  height='150px'
                  width='150px'
                />
                <motion.p
                  className='text-white w-[180px] text-center mt-6 font-bold'
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1, type: "spring", stiffness: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  متمم گرفتن
                </motion.p>
              </Link>
            </div>
          </div>
        </div>

        <motion.p
          className='text-primaryColor text-5xl w-full text-center p-14 font-bold'
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          whileInView={{
            opacity: 1,
            y: "0",
          }}
        >
          ابـــــــــزار ها
        </motion.p>
        <div className='flex justify-center  '>
          <div className='grid grid-cols-3 gap-48 '>
            <div className='flex justify-center '>
              <Link href={"/Ejtema"}>
                <motion.img
                  variants={imgVariants}
                  whileInView='visible'
                  initial='hidden'
                  src='/homepage/icons/unionIcon.svg'
                  alt='union icon'
                  height='180px'
                  width='180px'
                />
                <motion.p
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1, type: "spring", stiffness: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  className='text-white w-[180px] text-center mt-6 font-bold'
                >
                  اجتماع
                </motion.p>
              </Link>
            </div>
            <div className='flex justify-center'>
              <Link href={"/Eshterak"}>
                <motion.img
                  variants={imgVariants}
                  whileInView='visible'
                  initial='hidden'
                  src='/homepage/icons/intersectionIcon.svg'
                  alt='intersection icon'
                  height='160px'
                  width='160px'
                />
                <motion.p
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1, type: "spring", stiffness: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  className='text-white w-[180px] text-center mt-6 font-bold'
                >
                  اشتراک
                </motion.p>
              </Link>
            </div>
            <div className='flex justify-center'>
              <Link href={"/Tafazol"}>
                <motion.img
                  variants={imgVariants}
                  whileInView='visible'
                  initial='hidden'
                  src='/homepage/icons/minusIcon.svg'
                  alt='minus icon'
                  height='150px'
                  width='150px'
                />
                <motion.p
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1, type: "spring", stiffness: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  className='text-white w-[180px] text-center mt-6 font-bold'
                >
                  تفاضل
                </motion.p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
