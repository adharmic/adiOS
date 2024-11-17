import Image from "next/image";
import { useContext } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";

export default function AppGrid() {
  const { openApplings, setOpenApplings, possibleApplings } = useContext(
    ApplingManagerContext,
  );

  return (
    <div className="absolute l-0 t-0 z-10 w-fit gap-16 flex flex-col mt-16 wrap">
      {possibleApplings.map((app, index) => {
        return (
          <div
            key={index}
            className="hoverGlass appIcon aspect-square flex flex-col items-center justify-center p-4 h-64 hover:cursor-pointer transition-all active:scale-95"
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
            <Image src={app.icon} alt={app.title} width={128} height={128} />
            <h1 className="flex items-center justify-center border-foreground text-4xl p-2 rounded-xl mt-2">
              {app.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
