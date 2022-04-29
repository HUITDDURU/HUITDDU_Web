import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import styled from "@emotion/styled";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import PageTransition from "../src/components/PageTransition";
import LoginWrapper from "../src/components/LoginWrapper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

const Inner = styled.main`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  flex: 1;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient();

  if (router.pathname.startsWith("/login")) {
    return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <LoginWrapper>
            <Component {...pageProps} />
          </LoginWrapper>
          <Toaster position="top-center" />
        </QueryClientProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Outer>
            <Header />
            <Inner>
              <PageTransition>
                <Component {...pageProps} />
              </PageTransition>
            </Inner>
          </Outer>
          <Footer />
        </Container>
        <Toaster position="top-center" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
