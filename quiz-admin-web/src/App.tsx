import { router } from '@/router/routes'
import { RouterProvider } from 'react-router-dom'
import { createContext, useMemo, useState } from 'react'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
const ColorModeContext = createContext({ toggleColorMode: () => {} })
function App() {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light')

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setThemeMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        )
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode
        }
      }),
    [themeMode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
