import Image from "next/image";
import { useEffect, useRef } from "react";

type StartMenuProps = {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
};

export default function StartMenu({ isHidden, setIsHidden }: StartMenuProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        !document.querySelector(".startButton")?.contains(event.target as Node)
      ) {
        setIsHidden(true);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, [setIsHidden]);

  return (
    <div
      ref={wrapperRef}
      className="absolute max-h-full max-w-full w-[600px] h-[700px] p-2 left-0 pb-16 bottom-0 "
    >
      <div
        className={
          "h-full w-full overflow-hidden " +
          (isHidden
            ? "hidden"
            : "flex flex-col menuBarInverted justify-between items-center")
        }
      >
        <div className="p-6 menuBar w-full self-start text-3xl">
          Welcome, Guest
        </div>
        <div className="h-full w-full pl-1 pr-1 flex">
          <div className="bg-sand h-full w-full" />
          <div className="bg-background h-full w-3/4 border-l-2 border-cobalt" />
        </div>
        <div className="menuBar w-full p-6 flex items-center justify-end gap-4 text-xl">
          <a
            href="https://github.com/adharmic/"
            target="_blank"
            className="bg-foreground rounded-full h-12 w-12 border border-background"
          >
            <Image
              src="/github.svg"
              alt="Link to my GitHub profile"
              height={48}
              width={48}
            />
          </a>
          GitHub{" "}
        </div>
      </div>
    </div>
  );
}
