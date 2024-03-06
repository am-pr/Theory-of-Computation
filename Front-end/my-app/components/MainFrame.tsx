import { ReactNode, FC } from "react";

type MainFrameProps = {
  children: ReactNode;
  className?: string;
};

const MainFrame: FC<MainFrameProps> = ({
  children,
  className,
}: MainFrameProps) => {
  return (
    <main
      className={`hidden md:block bg-lightColor h-min md:p-2 lg:p-4 xl:p-6 absolute lg:left-16 xl:left-40 md:left-6 md:w-[60%] top-[27%] lg:w-2/3 shadow-[0_0_25px_0_rgba(0,0,0,0.15)] rounded-lg ${className}`}
    >
      {children}
    </main>
  );
};

export default MainFrame;
