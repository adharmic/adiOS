import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { Appling } from "../types/Appling";
import Window from "../components/Window";

type ApplingManagerContextType = {
  possibleApplings: Array<Appling>;
  openApplings: Array<Appling>;
  setOpenApplings: Dispatch<SetStateAction<Array<Appling>>>;
};

const ApplingsData: Array<Appling> = [
  {
    title: "Toolbox",
    icon: "/toolbox.png",
    component: (
      <Window close={() => {}} title="Toolbox" color="bg-coral"></Window>
    ),
  },
  {
    title: "Portfolio",
    icon: "/portfolio.png",
    component: (
      <Window close={() => {}} title="Toolbox" color="bg-coral"></Window>
    ),
  },
];

export const ApplingManagerContext = createContext<ApplingManagerContextType>({
  openApplings: [],
  setOpenApplings: () => [],
  possibleApplings: ApplingsData,
});

type ApplingManagerContextProviderProps = {
  initial?: Array<Appling>;
};

export function ApplingManagerContextProvider({
  children,
  initial = [],
}: PropsWithChildren<ApplingManagerContextProviderProps>) {
  const [openApplings, setOpenApplings] = useState<Array<Appling>>(initial);

  return (
    <ApplingManagerContext.Provider
      value={{
        openApplings: openApplings,
        setOpenApplings: setOpenApplings,
        possibleApplings: ApplingsData,
      }}
    >
      {children}
    </ApplingManagerContext.Provider>
  );
}
