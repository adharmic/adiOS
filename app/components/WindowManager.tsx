import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { useContext, useRef } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";
import Window from "./Window";
import { Appling } from "../types/Appling";

export default function WindowManager() {
  const windowManagerRef = useRef(null);
  const { openApplings, setOpenApplings } = useContext(ApplingManagerContext);

  gsap.registerPlugin(Draggable);

  const removeAppling = (applingToRemove: Appling) => {
    setOpenApplings((prevApplings) =>
      prevApplings.filter((appling) => appling.title !== applingToRemove.title),
    );
  };

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
      className="z-20 relative l-0 t-0 r-0 b-0 w-full h-full pointer-events-none flex items-center justify-center"
    >
      {openApplings.map((window, index) => {
        return (
          <div className="windowItem pointer-events-auto" key={index}>
            <Window
              title={window.title}
              color="bg-coral"
              close={() => removeAppling(window)}
            >
              {window.component}
            </Window>
          </div>
        );
      })}
    </div>
  );
}
