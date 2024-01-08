"use client";
import NextNProgress from "nextjs-progressbar";

import React from "react";

const NextNProgressBar = () => {
  return (
    <NextNProgress
      options={{ easing: "ease", speed: 500 }}
      color='red'
    />
  );
};

export default NextNProgressBar;
