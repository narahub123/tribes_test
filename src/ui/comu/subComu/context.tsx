import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";
import type { SubComuType } from "../../../types";

export const SubComuContext = createContext<SubComuType | null>(null);

interface SubComuProviderProps {
  value: SubComuType;
}

export const SubComuProvider: FC<PropsWithChildren<SubComuProviderProps>> = ({
  children,
  value,
}) => {
  return <SubComuContext value={value}>{children}</SubComuContext>;
};

export const useSubComuContext = () => {
  const context = useContext(SubComuContext);

  if (!context) throw new Error("에러");

  return context;
};
