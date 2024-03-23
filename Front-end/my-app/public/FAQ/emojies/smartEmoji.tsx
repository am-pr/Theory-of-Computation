import React from "react";
import { useHover } from "@mantine/hooks";

function smileEmoji() {
  const { hovered, ref } = useHover();

  return (
    <picture ref={ref} className='h-14 w-14'>
      {hovered ? (
        <img
          src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/512.webp'
          alt='🙂'
          className='h-10 w-10 absolute right-[10px]'
          style={{ right: "130px", top: "5px" }}
        />
      ) : (
        <img
          src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f913/emoji.svg'
          alt='🙂'
          className='h-9 w-9 absolute right-[10px]'
          style={{ right: "130px", top: "8px" }}
        />
      )}
    </picture>
  );
}

export default smileEmoji;
