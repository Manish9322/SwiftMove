"use client";

import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  speed?: number;
}

const TypewriterEffect = ({ text, speed = 150 }: TypewriterEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    setDisplayedText(""); // Reset on text change
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i > text.length - 1) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span className="text-primary">{displayedText}</span>;
};

export default TypewriterEffect;
