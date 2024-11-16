import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { ReactElement, useRef } from "react";

type WindowManagerProps = {
  openWindows: Array<ReactElement>;
};

export default function WindowManager({ openWindows }: WindowManagerProps) {
  const windowManagerRef = useRef(null);

  if (typeof window !== undefined) {
    gsap.registerPlugin(Draggable);
  }

  useGSAP(
    () => {
      Draggable.create(".windowItem", {
        bounds: windowManagerRef.current,
      });
    },
    { scope: windowManagerRef },
  );

  return (
    <div
      ref={windowManagerRef}
      className="z-20 absolute l-0 t-0 r-0 b-0 w-full h-full flex items-center justify-center"
    >
      {openWindows.map((window, index) => {
        return (
          <div className="windowItem" key={index}>
            {window}
          </div>
        );
      })}
    </div>
  );
}
