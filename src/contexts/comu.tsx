import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";
import type { ComuContextType } from "../types";

export const ComuContext = createContext<ComuContextType | null>(null);

interface ComuProviderProps {
  value: ComuContextType;
}

export const ComuProvider: FC<PropsWithChildren<ComuProviderProps>> = ({
  children,
  value,
}) => {
  return <ComuContext value={value}>{children}</ComuContext>;
};

export const useComuContext = () => {
  const context = useContext(ComuContext);

  if (!context) throw new Error("에러");

  return context;
};
