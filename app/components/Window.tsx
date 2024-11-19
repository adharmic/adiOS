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
        "applingContainer !rounded-none !rounded-t-xl scale-0 absolute pointer-events-auto flex flex-col glass max-w-full max-h-full !border-[rgba(0,0,0,0)] !border-none overflow-hidden " +
        (maximized ? "w-full h-full !transform-none" : "w-fit windowItem")
      }
    >
      <div
        className={
          "p-4 windowTitle menuBar !border-[rgba(0,0,0,0)] !border-none !rounded-none flex glass items-center justify-between gap-8"
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
      <div
        className={
          "p-4 w-full max-h-full overflow-scroll border-[#1621c9] border-4 border-t-0 " +
          (maximized ? "h-full" : "")
        }
      >
        {children}
      </div>
    </div>
  );
}
