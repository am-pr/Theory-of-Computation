import React from "react";
import { useHover } from "@mantine/hooks";

function thinkEmoji() {
  const { hovered, ref } = useHover();

  return (
    <div>
      <picture ref={ref}>
        {hovered ? (
          <img
            src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif'
            alt='🤔'
            width='40'
            height='40'
          />
        ) : (
          <img
            src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/emoji.svg'
            alt='🤔'
            width='35'
            height='35'
          />
        )}
      </picture>
    </div>
  );
}

export default thinkEmoji;
