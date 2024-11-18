import Image from "next/image";
import { useContext } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";

export default function AppGrid() {
  const { openApplings, setOpenApplings, possibleApplings } = useContext(
    ApplingManagerContext,
  );

  return (
    <div className="absolute l-0 t-0 z-10 w-fit gap-8 flex flex-col pb-4 flex-wrap max-h-full max-w-full pr-4">
      {possibleApplings.map((app, index) => {
        return (
          <div
            key={index}
            className="hoverGlass appIcon aspect-square flex flex-col w-fit items-center justify-center p-4 lg:h-40 lg:max-h-40 hover:cursor-pointer transition-all active:scale-95 h-32 max-h-32 rounded-2xl border border-[rgba(0,0,0,0)]"
            onClick={() => {
              if (openApplings.some((appling) => appling.title === app.title)) {
                // TODO: Should focus (put on top) the open appling.
                return;
              }
              setOpenApplings([
                ...openApplings,
                {
                  title: app.title,
                  icon: app.icon,
                  component: app.component,
                },
              ]);
            }}
          >
            <div className="h-16 aspect-square">
              <Image src={app.icon} alt={app.title} width={128} height={128} />
            </div>
            <h1 className="flex items-center justify-center glass lg:p-4 p-1 pr-2 pl-2 mt-2 text-xl">
              {app.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
