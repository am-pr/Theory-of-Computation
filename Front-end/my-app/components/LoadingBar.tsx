"use client";
import { AppProgressBar } from "next-nprogress-bar";
const LoadingBar = () => {
  return (
    <AppProgressBar
      color='#F4CE14'
      height='3px'
      options={{ showSpinner: false }}
    />
  );
};

export default LoadingBar;
