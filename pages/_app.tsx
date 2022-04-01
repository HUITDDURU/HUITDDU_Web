import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import LoginWapper from "../src/components/LoginWrapper";
import { SignUpContext } from "../src/context/SignUpContext";

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient();

  if (router.pathname.startsWith("/login")) {
    return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SignUpContext.Provider value={null}>
            <LoginWapper>
              <Component {...pageProps} />
            </LoginWapper>
          </SignUpContext.Provider>
          <Toaster position="top-center" />
        </QueryClientProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster position="top-center" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
