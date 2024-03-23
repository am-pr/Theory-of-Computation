import Link from "next/link";
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
      delay: 0.1,
      duration: 0.5,
    },
  },
};

function secondPage() {
  return (
    <main className='bg-darkColor h-screen'>
      <div className='flex justify-center items-center h-screen'>
        <div className='block'>
          <section className='mb-6'>
            <motion.p
              className='text-primaryColor text-5xl w-full text-center p-14 pt-0 font-bold'
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0, type: "spring", stiffness: 200 }}
              whileInView={{
                opacity: 1,
                y: "0",
              }}
            >
              عملگـــرها
            </motion.p>
            <div className='flex justify-center items-center'>
              <div className='grid grid-cols-3 gap-52'>
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
                    height='150px'
                    width='150px'
                  />
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    className='text-white w-[180px] text-center mt-6 font-bold text-lg'
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
                    height='145px'
                    width='145px'
                  />
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, type: "spring", stiffness: 100 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    className='text-white w-[180px] text-center mt-6 font-bold text-lg  '
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
                      height='135px'
                      width='135px'
                    />
                    <motion.p
                      className='text-white w-[180px] text-center mt-6 font-bold text-lg'
                      initial={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                      }}
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
          </section>

          <section>
            <motion.p
              className='text-primaryColor text-5xl w-full text-center p-14 font-bold '
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              whileInView={{
                opacity: 1,
                y: "0",
              }}
            >
              ابـــــــــزار ها
            </motion.p>
            <div className='flex justify-center  '>
              <div className='grid grid-cols-3 gap-52 '>
                <Link
                  href={"/Ejtema"}
                  className='flex flex-col justify-center items-center'
                >
                  <motion.img
                    variants={imgVariants}
                    whileInView='visible'
                    initial='hidden'
                    src='/homepage/icons/unionIcon.svg'
                    alt='union icon'
                    height='150px'
                    width='150px'
                  />
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    className='text-white w-[180px] text-center mt-6 font-bold text-lg'
                  >
                    اجتماع
                  </motion.p>
                </Link>

                <div className='flex justify-center'>
                  <Link
                    href={"/Eshterak"}
                    className='flex flex-col justify-center items-center'
                  >
                    <motion.img
                      variants={imgVariants}
                      whileInView='visible'
                      initial='hidden'
                      src='/homepage/icons/intersectionIcon.svg'
                      alt='intersection icon'
                      height='150px'
                      width='150px'
                    />
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      className='text-white w-[180px] text-center mt-6 font-bold text-lg'
                    >
                      اشتراک
                    </motion.p>
                  </Link>
                </div>
                <div className='flex justify-center'>
                  <Link
                    href={"/Tafazol"}
                    className='flex flex-col justify-center items-center'
                  >
                    <motion.img
                      variants={imgVariants}
                      whileInView='visible'
                      initial='hidden'
                      src='/homepage/icons/minusIcon.svg'
                      alt='minus icon'
                      height='135px'
                      width='135px'
                    />
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 120,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      className='text-white w-[180px] text-center mt-6 font-bold text-lg'
                    >
                      تفاضل
                    </motion.p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default secondPage;
