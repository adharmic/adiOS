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
    <div className="glass opacity-0 !bg-[#1621c9]/40 menuBar w-full translate-y-full flex justify-start h-16 max-h-16">
      <div className="!rounded-r-none w-fit text-3xl rounded-[16px] !bg-[#75b600]/60 p-4 flex items-center justify-center hover:!bg-[#75b600]/90 transition-all hover:!border-white !border-0 !border-r hover:cursor-pointer active:scale-90">
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
      <div className="ml-auto h-full flex items-center justify-center p-4 rounded-[16px] border-[rgba(255,255,255,0.3)] border-l !rounded-l-none !bg-[#fff]/20">
        <h1>{date.toDateString()}</h1>
      </div>
    </div>
  );
}
