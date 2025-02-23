import { PropsWithChildren, useRef } from "react";
import WindowControlButtons from "./WindowControlButtons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { InfoCircle } from "iconoir-react";

type WindowProps = {
  title: string;
  subtitle?: string;
  close: () => void;
  isOpen?: boolean;
  isFocused?: boolean;
};

export default function Window({
  title,
  children,
  close,
  subtitle,
  isOpen,
  isFocused,
}: PropsWithChildren<WindowProps>) {
  const applingRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        applingRef.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.25,
        },
      );
    },
    { dependencies: [] },
  );

  useGSAP(
    () => {
      if (isOpen) {
        gsap.fromTo(
          applingRef.current,
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.25,
          },
        );
      } else {
        gsap.fromTo(
          applingRef.current,
          {
            scale: 1,
          },
          {
            scale: 0,
            duration: 0.15,
          },
        );
      }
    },
    { dependencies: [isOpen] },
  );

  return (
    <div
      ref={applingRef}
      className={
        "applingContainer !rounded-none absolute pointer-events-auto flex flex-col glass max-w-full max-h-full !border-[rgba(0,0,0,0)] !border-none overflow-hidden w-[600px] windowItem " +
        (isOpen ? "visible" : "invisible") +
        " " +
        (isFocused ? "!z-30" : "!z-20")
      }
    >
      <div
        className={
          "p-4 windowTitle z-40 menuBar !border-[rgba(0,0,0,0)] !border-none !rounded-none flex glass items-center justify-between gap-8"
        }
      >
        <h1 className="text-4xl">{title}</h1>
        <WindowControlButtons close={() => close()} />
      </div>
      {subtitle && (
        <div className="text-black border-b-2 border-4 border-t-0 border-cobalt p-2 flex gap-2 text-cobalt bg-background items-center justify-center">
          <InfoCircle color="var(--cobalt)" />
          {subtitle}
        </div>
      )}
      <div className="border-[#1621c9] border-4 border-t-0 w-full max-h-full overflow-x-hidden overflow-y-scroll scroller transition-all">
        <div className={"p-4 w-full "}>{children}</div>
      </div>
    </div>
  );
}
