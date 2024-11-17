import { PropsWithChildren, useState } from "react";
import WindowControlButtons from "./WindowControlButtons";

type WindowProps = {
  title: string;
  color: string;
  close: () => void;
};

export default function Window({
  title,
  color,
  children,
  close,
}: PropsWithChildren<WindowProps>) {
  const [maximized, setMaximized] = useState(false);

  return (
    <div className={"absolute pointer-events-auto border-4 border-foreground flex flex-col bg-sand rounded-xl " + (maximized ? "w-full h-full !transform-none" : "w-fit windowItem")}>
      <div
        className={
          "p-4 flex items-center justify-between rounded-t-lg border-b-4 border-foreground gap-16 " +
          color
        }
      >
        <h1 className="text-4xl">{title}</h1>
        <WindowControlButtons isMaximixed={maximized} close={() => close()} toggleMaximize={() => {
          setMaximized(!maximized);
        }} />
      </div>
      <div className="p-4 w-full">{children}</div>
    </div>
  );
}
