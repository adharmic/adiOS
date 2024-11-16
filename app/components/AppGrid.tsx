import Image from "next/image";
import { useContext } from "react";
import { ApplingManagerContext } from "../contexts/ApplingManagerContext";
import Window from "./Window";

export default function AppGrid() {
  const { openApplings, setOpenApplings, possibleApplings } = useContext(ApplingManagerContext);

  return (
    <div className="absolute l-0 t-0 z-10 w-fit gap-16 flex flex-col mt-16">
      {possibleApplings.map((app, index) => {
        return (
          <div
            key={index}
            className="appIcon aspect-square flex flex-col items-center justify-center"
            onClick={() => {
              setOpenApplings([...openApplings, {
                title: app.title,
                icon: app.icon,
                component: <Window closeCallback={() => {
                  setOpenApplings(openApplings.splice(index, 1))
                }} title={app.title} color="bg-coral"></Window>
              }]);
            }}
          >
            <Image src={app.icon} alt={app.title} width={128} height={128} />
            <h1 className="flex items-center justify-center border-4 border-foreground text-4xl bg-sand p-2 rounded-xl mt-2">
              {app.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
