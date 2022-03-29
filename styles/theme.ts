export {};

interface Color {
  primary: string;
  secondary: string;
  error: string;
  sub: {
    pink: string;
    lime: string;
    orange: string;
    coral: string;
    blue: string;
    purple: string;
    lightBlue: string;
  };
  grayscale: {
    black: string;
    darkGray: string;
    gray1: string;
    gray2: string;
    lightGray1: string;
    lightGray2: string;
    white: string;
  };
}

interface Font {
  heading1: string;
  heading2: string;
  heading3: string;
  subtitle: string;
  body1: string;
  body2: string;
  description: string;
}

export interface Theme {
  colors: Color;
  fonts: Font;
}

export const theme: Theme = {
  colors: {
    primary: "#5855E9",
    secondary: "#55E9AB",
    error: "#FE6F66",
    sub: {
      blue: "#9BB7FF",
      coral: "#FD8888",
      lightBlue: "#ADEDFB",
      lime: "#88FDCC",
      orange: "#FDC088",
      pink: "#FC9CD6",
      purple: "#9888FD",
    },
    grayscale: {
      black: "#22222D",
      darkGray: "#4F4F58",
      gray1: "#797982",
      gray2: "#A5A5AE",
      lightGray1: "#D6D6DF",
      lightGray2: "#EFEFF3",
      white: "#FDFDFF",
    },
  },
  fonts: {
      
  }
};
