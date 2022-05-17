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
import { RecoilRoot } from "recoil";
import { useMemo } from "react";
import RefreshError from "../src/class/RefreshError";
import storageKeys from "../src/constant/storageKeys";

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

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps) {
  const onError = async (err: unknown) => {
    if (err instanceof RefreshError) {
      await router.push("/login");
      localStorage.removeItem(storageKeys.accessToken);
      localStorage.removeItem(storageKeys.refreshToken);
      localStorage.removeItem(storageKeys.expiresAt);
    }
  };

  queryClient.setDefaultOptions({ queries: { onError, retry: false } });

  const content = useMemo(() => {
    if (router.pathname.startsWith("/login")) {
      return (
        <LoginWrapper>
          <Component {...pageProps} />
        </LoginWrapper>
      );
    }

    return (
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
    );
  }, [Component, pageProps, router.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          {content}
          <Toaster position="top-center" />
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
