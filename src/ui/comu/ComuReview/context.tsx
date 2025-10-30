import {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
} from "react";
import type { ComuReviewContextType } from "../../../types";

export const ComuReviewContext = createContext<ComuReviewContextType | null>(
  null
);

interface ComuReviewProviderProps {
  value: ComuReviewContextType;
}

export const ComuReviewProvider: FC<
  PropsWithChildren<ComuReviewProviderProps>
> = ({ children, value }) => {
  return <ComuReviewContext value={value}>{children}</ComuReviewContext>;
};

export const useComuReviewContext = () => {
  const context = useContext(ComuReviewContext);

  if (!context) {
    throw new Error("에러");
  }

  return context;
};
