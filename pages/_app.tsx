import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/utils/theme/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

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
