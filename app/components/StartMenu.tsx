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
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsHidden(true);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => document.removeEventListener("mouseup", handleClickOutside);
  }, [setIsHidden]);

  return (
    <div ref={wrapperRef}>
      <div
        className={
          "max-h-full max-w-full overflow-hidden absolute w-[600px] h-[700px] left-0 bottom-16 " +
          (isHidden
            ? "hidden"
            : "flex flex-col menuBarInverted justify-between items-center")
        }
      >
        <div className="p-6 menuBar w-full self-start">Welcome, Guest</div>
        <div className="h-full w-full pl-1 pr-1">
          <div className="bg-sand h-full w-full" />
          <div className="bg-background h-full w-3/4 border-l-2 border-cobalt" />
        </div>
        <div className="menuBar w-full p-6 self-end">Choose an option</div>
      </div>
    </div>
  );
}
