import { PropsWithChildren, useState } from "react";
import WindowControlButtons from "./WindowControlButtons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type WindowProps = {
  title: string;
  color: string;
  close: () => void;
};

export default function Window({
  title,
  children,
  close,
}: PropsWithChildren<WindowProps>) {
  const [maximized, setMaximized] = useState(false);

  useGSAP(() => {
    gsap.to(".applingContainer", {
      duration: 0.2,
      scale: 1,
    });
  }, []);

  return (
    <div
      className={
        "applingContainer scale-0 absolute pointer-events-auto flex flex-col glass max-w-full max-h-full !border-[--cobalt] !border-4 overflow-hidden " +
        (maximized ? "w-full h-full !transform-none" : "w-fit windowItem")
      }
    >
      <div
        className={
          "p-4 windowTitle menuBar !rounded-none flex glass items-center justify-between gap-8 !bg-[#1621c9]/40 !border-[rgba(0,0,0,0)] !border-b-white !rounded-b-none"
        }
      >
        <h1 className="text-4xl">{title}</h1>
        <WindowControlButtons
          isMaximixed={maximized}
          close={() => close()}
          toggleMaximize={() => {
            setMaximized(!maximized);
          }}
        />
      </div>
      <div className="p-4 w-full max-h-full overflow-scroll">{children}</div>
    </div>
  );
}
