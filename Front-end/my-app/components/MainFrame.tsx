import { ReactNode, FC } from "react";

type MainFrameProps = {
  children: ReactNode;
};

const MainFrame: FC<MainFrameProps> = ({ children }: MainFrameProps) => {
  return (
    <main className="hidden md:block bg-lightColor md:p-2 lg:p-4 xl:p-6 fixed lg:left-16 text-center xl:left-40 md:left-6 md:w-[60%] top-80 lg:w-2/3 shadow-[0_0_25px_0_rgba(0,0,0,0.15)] rounded-lg h-fit">
      {children}
    </main>
  );
};

export default MainFrame;
