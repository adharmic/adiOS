import { ReactElement } from "react";
import { App } from "../types/App";
import AppGrid from "./AppGrid";
import WindowManager from "./WindowManager";

type ViewportProps = {
  openWindows: Array<ReactElement>;
  apps: Array<App>;
};

export default function Viewport({ apps, openWindows }: ViewportProps) {
  console.log(apps);
  return (
    <div className="viewport hidden w-full h-full m-4 rounded-xl">
      <div className="h-full w-full rounded-xl relative">
        <AppGrid apps={apps} />
        <WindowManager openWindows={openWindows} />
      </div>
    </div>
  );
}
