import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import LoginWapper from "../src/components/LoginWrapper";
import SignUpProvider from "../src/components/Providers/SignUpProvider";

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient();

  if (router.pathname.startsWith("/login")) {
    return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SignUpProvider>
            <LoginWapper>
              <Component {...pageProps} />
            </LoginWapper>
            <Toaster position="top-center" />
          </SignUpProvider>
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
