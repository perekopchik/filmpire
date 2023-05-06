import React, {useState, createContext, useMemo} from 'react';
import {ThemeProvider,createTheme} from "@mui/material";

export const ColorModelContext = createContext();

const ToggleColorMode = ({children}) => {
    const [mode,setMode] = useState('light');

    const toggleColorMode = () => {
        setMode((prevMode)=> prevMode === 'light' ? 'dark': 'light')
    }

    const theme = useMemo(()=> createTheme({
        palette: {
            mode,
        }
    }),[mode]);

    return(
        <ColorModelContext.Provider value={{ mode, setMode,toggleColorMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModelContext.Provider>
    )
}

export default ToggleColorMode;