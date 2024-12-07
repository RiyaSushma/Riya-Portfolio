import { createContext, useContext, useReducer } from "react";
import { initialState, themeReducer } from "./ThemeReducer";
import { hrefReducer, initialHref } from "./HrefReducer";

export const ThemeContext = createContext();

export const ThemeStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            { children }
        </ThemeContext.Provider>
    )
};

export const HrefContext = createContext();

export const HrefStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(hrefReducer, initialHref);

    return (
        <HrefContext.Provider value={{ state, dispatch }}>
            { children }
        </HrefContext.Provider>
    )
}

export const useThemeStateValue = () => useContext(ThemeContext);
export const useHrefStateValue = () => useContext(HrefContext);