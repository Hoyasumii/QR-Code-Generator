import { createContext, type Dispatch, type SetStateAction } from "react";

type Theme = "dark";

export const ThemeContext = createContext<
  | {
      theme: Theme | undefined;
      setTheme: Dispatch<SetStateAction<Theme | undefined>>;
    }
  | undefined
>(undefined);
