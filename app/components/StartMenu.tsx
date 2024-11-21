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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsHidden]);

  return (
    <div ref={wrapperRef}>
      <div
        className={
          "max-h-full max-w-full overflow-hidden absolute w-[600px] h-[700px] left-0 bottom-16 " +
          (isHidden ? "hidden" : "flex flex-col bg-white")
        }
      >
        <div className="menuBar">Welcome, Guest</div>
        <div className="menuBar mt-auto">Choose an option</div>
      </div>
    </div>
  );
}
