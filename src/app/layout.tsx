'use client'
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {theme} from "@/theme";
import {ReactNode} from "react";

const RootLayout = ({children}: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <CssBaseline/>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
