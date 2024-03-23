import React from "react";
import { useHover } from "@mantine/hooks";
import s from "./512.webp";

function smileEmoji() {
  const { hovered, ref } = useHover();

  return (
    <picture ref={ref} className='h-14 w-14'>
      {hovered ? (
        <img
          src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f603/512.gif'
          alt='🙂'
          className='h-10 w-10 absolute right-[10px]'
          style={{ right: "1px", top: "5px" }}
        />
      ) : (
        <img
          src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/emoji.svg'
          alt='🙂'
          className='h-9 w-9 absolute right-[10px]'
          style={{ right: "1px", top: "8px" }}
        />
      )}
    </picture>
  );
}

export default smileEmoji;
