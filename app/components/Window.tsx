import { PropsWithChildren, useState } from "react";
import WindowControlButtons from "./WindowControlButtons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { InfoCircle } from "iconoir-react";

type WindowProps = {
  title: string;
  subtitle?: string;
  close: () => void;
};

export default function Window({
  title,
  children,
  close,
  subtitle,
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
        "applingContainer !rounded-none scale-0 absolute pointer-events-auto flex flex-col glass max-w-full max-h-full !border-[rgba(0,0,0,0)] !border-none overflow-hidden " +
        (maximized ? "w-full h-full !transform-none" : "w-[600px] windowItem")
      }
    >
      <div
        className={
          "p-4 windowTitle z-30 menuBar !border-[rgba(0,0,0,0)] !border-none !rounded-none flex glass items-center justify-between gap-8"
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
      {subtitle && (
        <div className="text-black border-b-2 border-4 border-t-0 border-cobalt p-2 flex gap-2 text-cobalt bg-background items-center justify-center">
          <InfoCircle color="var(--cobalt)" />
          {subtitle}
        </div>
      )}
      <div className="border-[#1621c9] border-4 border-t-0 w-full max-h-full overflow-x-hidden overflow-y-scroll scroller transition-all">
        <div className={"p-4 w-full " + (maximized ? "h-full" : "")}>
          {children}
        </div>
      </div>
    </div>
  );
}
