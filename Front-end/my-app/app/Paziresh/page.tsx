import MachineInfo from "@/components/MachineInfo";
import MainFrame from "@/components/MainFrame";
import { Chip } from "@nextui-org/react";

const StringAccepter = () => {
  return (
    <MainFrame>
      
      <header className="flex justify-between">

        <div className="md:hidden w-full h-[8.75rem] bg-darkColor flex"> {/* mobileUpNavbar: this dive is used for navbar (Up) */}
          <div className="mt-[6.125rem] ml-4 ">{/* chip */}
            <Chip
            className="text-[0.625rem]"
              classNames={{ base: "bg-darkMediumColor", content: "text-white" }}
              variant="solid"
              >
              مرحله ۱ از ۲
            </Chip>
          </div>
          <h1 className="text-xl md:text-2xl font-black text-primaryColor flex justify-end ml-[12.5rem] mt-[3.625rem]">پذیرش رشته</h1>
        </div>{/* End: mobileUpNavbar */}

        <Chip
          className="hidden md:block"
          classNames={{ base: "bg-darkMediumColor", content: "text-white" }}
          variant="solid"
          >
          مرحله ۱ از ۲
        </Chip>
        <h1 className="text-base md:text-2xl font-black text-darkColor hidden md:block ">پذیرش رشته</h1>
      </header>

      <div className="m-4">{/* mainContent: this dive is used for main content */}
        <span className="font-medium md:mt-9 mt-6 block text-right text-sm md:text-base">
          :پذیرش رشته شامل دو گام است
        </span>
        <span className="block font-bold text-right md:mt-2 mt-6 md:text-base text-sm">گام اول</span>
        <span className="block text-right md:mt-1 mt-2 md:mr-4  font-medium mb-6 md:text-base text-sm">
          در این گام شما ابتدا ماشین مورد نظر خود را که قرار است رشته را بپذیرد
          رسم میکنید
        </span>
        <MachineInfo redirectPathname="/Paziresh/result" />
      </div>{/* End: mainContent */}

      {/* mobileBottomNavbar: this dive is used for navbar (Bottom) */}
      <div className="w-full h-[5.75rem] bg-darkColor flex justify-center items-center text-white font-black md:hidden">
        <h1 className="text-2xl">mobileBottomNav</h1>
      </div>
      {/* End: mobileBottomNavbar */}


    </MainFrame>
  );
};

export default StringAccepter;
