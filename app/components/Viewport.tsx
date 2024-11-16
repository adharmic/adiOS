import AppGrid from "./AppGrid";
import WindowManager from "./WindowManager";

export default function Viewport() {
  return (
    <div className="viewport hidden w-full h-full m-4 rounded-xl">
      <div className="h-full w-full rounded-xl relative">
        <AppGrid />
        <WindowManager />
      </div>
    </div>
  );
}
