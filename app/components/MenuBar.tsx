import { useContext } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";

export default function MenuBar() {
  const { openApplings } = useContext(ApplingManagerContext);

  return (
    <div className="opacity-0 menuBar w-full bg-sand rounded-xl border-4 border-foreground -translate-y-full flex justify-start">
      <div className="bg-coral w-fit text-4xl p-6 rounded-l-md border-r-4 border-foreground flex items-center justify-center">
        Start
      </div>
      <div className="flex items-center ml-auto mr-4 gap-4">
        {openApplings.map((appling, index) => {
          return (
            <div key={index} className="bg-coral p-2 text-4xl rounded-lg border-4 border-foreground">
              {appling.title}
            </div>
          )
        })}
      </div>
    </div>
  );
}
