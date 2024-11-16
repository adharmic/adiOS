import Image from "next/image";
import { PropsWithChildren } from "react";

type WindowProps = {
  title: string;
  color: string;
};

export default function Window({
  title,
  color,
  children,
}: PropsWithChildren<WindowProps>) {
  return (
    <div className="windowItem border-4 border-foreground flex flex-col bg-sand rounded-xl w-fit">
      <div
        className={
          "p-4 flex items-center justify-between rounded-t-lg border-b-4 border-foreground gap-16 " +
          color
        }
      >
        <h1 className="text-4xl">{title}</h1>
        <button className="w-12 rounded-full flex items-center justify-center aspect-square bg-white border-4 border-foreground">
          <Image src="/close.svg" alt="close" width={40} height={40} />
        </button>
      </div>
      <div className="p-4 w-full">{children}</div>
    </div>
  );
}
