import { PropsWithChildren, useState } from "react";
import WindowControlButtons from "./WindowControlButtons";

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

  return (
    <div
      className={
        "absolute pointer-events-auto flex flex-col glass " +
        (maximized ? "w-full h-full !transform-none" : "w-fit windowItem")
      }
    >
      <div
        className={
          "p-4 flex glass items-center justify-between gap-16 !bg-[#1621c9]/40 !rounded-b-none"
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
      <div className="p-4 w-full">{children}</div>
    </div>
  );
}
