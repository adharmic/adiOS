import Image from "next/image";
import { useContext } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";

export default function AppGrid() {
  const { possibleApplings, openAppling } = useContext(ApplingManagerContext);

  return (
    <div className="absolute l-0 t-0 z-10 w-fit gap-8 flex flex-col pb-4 flex-wrap max-h-full max-w-full pr-4">
      {possibleApplings.map((app, index) => {
        return (
          <div
            key={index}
            className="hoverGlass appIcon aspect-square flex flex-col w-fit items-center justify-center p-4 lg:h-40 lg:max-h-40 hover:cursor-pointer transition-all active:scale-95 h-40 max-h-40 border border-[rgba(0,0,0,0)]"
            onClick={() => {
              openAppling(app);
            }}
          >
            <div className="h-20 aspect-square">
              <Image src={app.icon} alt={app.title} width={128} height={128} />
            </div>
            <h1 className="flex items-center justify-center !rounded-none glass lg:p-2 p-1 pr-2 pl-2 mt-2 text-xl !bg-[rgba(0,0,0,.3)] !text-white">
              {app.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
