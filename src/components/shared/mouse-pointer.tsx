"use client";
import { useCallback, useEffect } from "react";

export default function MousePointer() {
  const handlePointerMove = useCallback((event: any) => {
    const { pageX: clientX, pageY: clientY } = event;
    const blob = document.getElementById("blob");
    if (blob) {
      requestAnimationFrame(() => {
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 2000, fill: "forwards" }
        );
      });
    }
  }, []);

  useEffect(() => {
    document.body.onpointermove = handlePointerMove;

    return () => {
      document.body.onpointermove = null;
    };
  }, [handlePointerMove]);

  return (
    <div className="absolute top-0 overflow-hidden w-full h-full z-[-1]">
      <div className="h-[100%] w-[100%] top-0 absolute z-[-1] backdrop-blur-[200px]"></div>
      <div
        id="blob"
        className="bg-mouse-gradient h-[250px] aspect-square absolute left-[50%] top-[50%] rounded-full animate-spin-slow z-[-2] opacity-[40%]"
      ></div>
    </div>
  );
}
