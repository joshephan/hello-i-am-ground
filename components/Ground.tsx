"use client";
import { PLANT_EMOJIS } from "@/constants";
import React from "react";

export default function Ground({ initText = "--" }: { initText?: string }) {
  const [emoji, setEmoji] = React.useState(initText);
  const changeEmoji = () => {
    setEmoji(PLANT_EMOJIS[Math.floor(Math.random() * PLANT_EMOJIS.length)]);
  };

  return (
    <div
      className="w-[24px] h-[24px] inline-block"
      onMouseEnter={() => changeEmoji()}
    >
      {emoji}
    </div>
  );
}
