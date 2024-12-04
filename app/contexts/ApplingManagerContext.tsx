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
  openAppling: (appling: Appling) => void;
  closeAppling: (appling: Appling) => void;
  focusedAppling: number;
  setFocusedAppling: (index: number) => void;
};

export const ApplingManagerContext = createContext<ApplingManagerContextType>({
  openApplings: [],
  setOpenApplings: () => [],
  possibleApplings: ApplingsData,
  openAppling: () => null,
  closeAppling: () => null,
  focusedAppling: -1,
  setFocusedAppling: () => null,
});

type ApplingManagerContextProviderProps = {
  initial?: Array<Appling>;
};

export function ApplingManagerContextProvider({
  children,
  initial = [],
}: PropsWithChildren<ApplingManagerContextProviderProps>) {
  const [openApplings, setOpenApplings] = useState<Array<Appling>>(initial);
  const [focusedAppling, setFocusedAppling] = useState(-1);

  const closeAppling = (appling: Appling) => {
    appling.isOpen = false;
    setOpenApplings(
      openApplings.map((openAppling) => {
        return openAppling.title === appling.title ? appling : openAppling;
      }),
    );
  };

  const openAppling = (appling: Appling) => {
    appling.isOpen = true;
    const foundApplingIndex = openApplings.indexOf(appling);
    if (foundApplingIndex !== -1) {
      setFocusedAppling(foundApplingIndex);
      setOpenApplings(
        openApplings.map((openAppling) => {
          return openAppling.title === appling.title ? appling : openAppling;
        }),
      );
    } else {
      setOpenApplings([...openApplings, appling]);
    }
  };

  return (
    <ApplingManagerContext.Provider
      value={{
        openApplings: openApplings,
        setOpenApplings: setOpenApplings,
        possibleApplings: ApplingsData,
        openAppling: openAppling,
        closeAppling: closeAppling,
        focusedAppling: focusedAppling,
        setFocusedAppling: setFocusedAppling,
      }}
    >
      {children}
    </ApplingManagerContext.Provider>
  );
}
