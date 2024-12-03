import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { useContext, useRef } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";
import Window from "./Window";

export default function WindowManager() {
  const windowManagerRef = useRef(null);
  const windowRef = useRef(null);
  const { openApplings, closeAppling } = useContext(ApplingManagerContext);

  gsap.registerPlugin(Draggable);

  useGSAP(
    () => {
      Draggable.create(".windowItem", {
        trigger: ".windowTitle",
        bounds: windowManagerRef.current,
        allowEventDefault: true,
      });
    },
    { scope: windowRef, dependencies: [openApplings] },
  );

  return (
    <div
      ref={windowManagerRef}
      className="z-20 relative l-0 t-0 r-0 b-0 w-full h-full pointer-events-none"
    >
      {openApplings.map((window, index) => {
        return (
          window.isOpen && (
            <div ref={windowRef} key={index}>
              <Window
                title={window.title}
                subtitle={window.subtitle}
                close={() => closeAppling(window)}
              >
                {window.component}
              </Window>
            </div>
          )
        );
      })}
    </div>
  );
}
