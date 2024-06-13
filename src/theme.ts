import { createTheme } from '@mui/material/styles';
import {ThemeType} from "@/types/theme";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#f48fb1',
    },
    secondary: {
      main: '#90caf9',
    },
    mode: 'dark',
  },
});
