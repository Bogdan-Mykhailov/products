import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import {darkTheme, lightTheme} from "@/theme";

interface Props {
  currentThemeMode: 'light' | 'dark';
  onChangeTheme: () => void;
}

const ThemeSwitchButton: React.FC<Props> = ({ currentThemeMode, onChangeTheme }) => {
  const theme = currentThemeMode === 'light' ? lightTheme : darkTheme;
  return (
    <IconButton
      color="inherit"
      aria-label="Toggle light/dark theme"
      onClick={onChangeTheme}
      style={{ color: theme.palette.primary.main, margin: "20px 30px" }}
    >
      {currentThemeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};

export default ThemeSwitchButton;
