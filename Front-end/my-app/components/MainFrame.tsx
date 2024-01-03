import { ReactNode, FC } from "react";

type MainFrameProps = {
  children: ReactNode;
};

const MainFrame: FC<MainFrameProps> = ({ children }: MainFrameProps) => {
  return (
    <main className='  bg-white md:bg-lightColor h-min md:p-2 lg:p-4 xl:p-6 md:relative lg:left-16 xl:left-40 md:left-6 md:w-[60%] top-80 lg:w-2/3 md:shadow-[0_0_25px_0_rgba(0,0,0,0.15)] md:rounded-lg'>
      {children}
    </main>
  );
};

export default MainFrame;
