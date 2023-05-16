import {
  createContext,
  useState,
  PropsWithChildren,
  FunctionComponent,
  Dispatch,
  SetStateAction,
} from "react";

type ContextState = {
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
};

export const Context = createContext<ContextState | null>(null);

export const Provider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [points, setPoints] = useState(0);

  return (
    <Context.Provider value={{ points, setPoints }}>
      {children}
    </Context.Provider>
  );
};
