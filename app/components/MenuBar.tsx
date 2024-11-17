import { useContext } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";

export default function MenuBar() {
  const { openApplings } = useContext(ApplingManagerContext);

  return (
    <div className="glass opacity-0 !bg-[#1621c9]/20 menuBar w-full translate-y-full flex justify-start h-28">
      <div className="!rounded-r-none w-fit text-3xl glass !bg-[#75b600]/60 p-4 flex items-center justify-center hover:!bg-[#75b600]/90 transition-all hover:!border-white hover:cursor-pointer active:scale-90">
        Start
      </div>
      <div className="p-4 flex items-center gap-4">
        {openApplings.map((appling, index) => {
          return (
            <div
              key={index}
              className="glass p-4 text-2xl !bg-[#1621c9]/40 hover:!bg-[#1621c9]/60 transition-all hover:cursor-pointer"
            >
              {appling.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
