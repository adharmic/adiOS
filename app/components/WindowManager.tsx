import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { useContext, useRef } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";

type WindowManagerProps = {
};

export default function WindowManager({ }: WindowManagerProps) {
  const windowManagerRef = useRef(null);
  const { openApplings } = useContext(ApplingManagerContext)

  if (typeof window !== undefined) {
    gsap.registerPlugin(Draggable);
  }

  useGSAP(
    () => {
      Draggable.create(".windowItem", {
        bounds: windowManagerRef.current,
      });
    },
    { scope: windowManagerRef, dependencies: [openApplings] },
  );

  return (
    <div
      ref={windowManagerRef}
      className="z-20 absolute l-0 t-0 r-0 b-0 w-full h-full pointer-events-none flex items-center justify-center"
    >
      {openApplings.map((window, index) => {
        return (
          <div className="windowItem pointer-events-auto" key={index}>
            {window.component}
          </div>
        );
      })}
    </div>
  );
}
