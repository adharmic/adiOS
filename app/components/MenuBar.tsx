import { useContext, useEffect, useState } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";

type MenuBarProps = {
  isStartHidden: boolean;
  toggleStartHidden: () => void;
};

export default function MenuBar({
  isStartHidden,
  toggleStartHidden,
}: MenuBarProps) {
  const { openApplings } = useContext(ApplingManagerContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bottom-0 !rounded-none glass menuBar opacity-0 !bg-cobalt menuBar w-screen translate-y-full flex justify-center sm:justify-start h-16 max-h-16">
      <div
        className={
          "absolute startButton h-24 w-24 rounded-t-full aspect-square flex items-start pt-5 drop-shadow-2xl justify-center text-2xl p-4 top-1/2 -translate-y-1/3 sm:relative sm:h-full sm:w-32 sm:rounded-none sm:border-[rgba(0,0,0,0)] sm:border-r-white hover:cursor-pointer hover:saturate-150 transition-all sm:-translate-y-1/2 sm:items-center " +
          (isStartHidden ? "bg-red" : "bg-valley")
        }
        onClick={() => {
          toggleStartHidden();
        }}
      >
        {isStartHidden ? "Start" : "Close"}
      </div>
      <div className="pl-2 hidden md:flex items-center gap-2">
        {openApplings.map((appling, index) => {
          return (
            <div
              key={index}
              className="flex border-[rgba(255,255,255,0.3)] border !rounded-none items-center justify-center h-12 pl-4 pr-4 text-2xl !bg-lavender hover:!bg-[#1621c9]/60 transition-all hover:cursor-pointer"
            >
              {appling.title}
            </div>
          );
        })}
      </div>
      <div className="ml-auto w-1/2 h-full flex items-center justify-end p-4 !rounded-none border-[rgba(255,255,255,0.3)] border-l !rounded-l-none !bg-[#fff]/20 sm:w-auto">
        <h1>{date.toDateString()}</h1>
      </div>
    </div>
  );
}
