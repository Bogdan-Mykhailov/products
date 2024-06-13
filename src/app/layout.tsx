'use client'
import React, { ReactNode, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '@/theme';
import ThemeSwitchButton from "@/components/ThemeSwitcher/ThemeSwitcher";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
      <body>
      <ThemeSwitchButton currentThemeMode={themeMode} onChangeTheme={toggleTheme} />
      {children}
      </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
