import { useContext, useEffect, useState } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";

export default function MenuBar() {
  const { openApplings } = useContext(ApplingManagerContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="glass opacity-0 !bg-[#1621c9]/40 menuBar w-full translate-y-full flex justify-center sm:justify-start h-16 max-h-16">
      <div className="absolute h-20 bg-valley rounded-full aspect-square flex items-center justify-center text-2xl border-white border p-2 top-1/2 -translate-y-1/2 sm:relative sm:h-full sm:rounded-[16px] sm:border-[rgba(0,0,0,0)] sm:border-r-white sm:rounded-r-none hover:cursor-pointer hover:saturate-150 transition-all">
        Start
      </div>
      <div className="pl-2 hidden md:flex items-center gap-2">
        {openApplings.map((appling, index) => {
          return (
            <div
              key={index}
              className="flex border-[rgba(255,255,255,0.3)] border rounded items-center justify-center h-12 pl-4 pr-4 text-2xl !bg-lavender hover:!bg-[#1621c9]/60 transition-all hover:cursor-pointer"
            >
              {appling.title}
            </div>
          );
        })}
      </div>
      <div className="ml-auto h-full items-center justify-center p-4 rounded-[16px] border-[rgba(255,255,255,0.3)] border-l !rounded-l-none !bg-[#fff]/20 md:flex">
        <h1>{date.toDateString()}</h1>
      </div>
    </div>
  );
}
