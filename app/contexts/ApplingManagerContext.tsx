import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { Appling } from "../types/Appling";
import { ApplingsData } from "../data/ApplingData";

type ApplingManagerContextType = {
  possibleApplings: Array<Appling>;
  openApplings: Array<Appling>;
  setOpenApplings: Dispatch<SetStateAction<Array<Appling>>>;
};

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
