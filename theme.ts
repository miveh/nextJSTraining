"use client";
import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    customColor: PaletteColor & { primaryExtraDark: string };
  }
  interface PaletteOptions {
    customColor: PaletteColorOptions & { primaryExtraDark: string };
  }

  interface TypeText {
    light: string;
    dark: string;
    contrastText: string;
    disableText: string;
  }

  interface TypeTextOption {
    light: string;
    dark: string;
    contrastText: string;
  }
}

export const BORDER_RADIUS = 0;
export const BORDER_RADIUS10 = "2px";
export const BORDER_RADIUS15 = "5px";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#4dc591",
      light: "#ebf9f4 ",
    },
    secondary: {
      main: "#9095ee",
      light: "#f5f6ff",
    },
    // success: {
    //   main: "green",
    //   light: "#ebf9f4",
    // },
    warning: {
      main: "#ff7648",
      light: "#fff2ec",
    },
    // error: {
    //   main: "",
    // },
    text: {
      primary: "#27323C",
      dark: "#072B4C",
      light: "#3B4A59",
      contrastText: "#B1BECA",
      disableText: "#b2bec9",
    },

    customColor: {
      primaryExtraDark: "#ffebee",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
