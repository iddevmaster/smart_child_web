import React, { createContext, useState, useContext } from "react";
import { Theme, ThemeProvider, createTheme } from "@mui/material/styles";
import useColorMode from "./useColorMode";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode] = useColorMode();
  const [theme, setTheme] = useState<Theme>(colorMode === "dark" ? darkTheme : lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
