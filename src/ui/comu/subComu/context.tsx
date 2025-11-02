import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";
import type { SubComuCardType } from "../../../types";

export const SubComuContext = createContext<SubComuCardType | null>(null);

interface SubComuProviderProps {
  value: SubComuCardType;
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
