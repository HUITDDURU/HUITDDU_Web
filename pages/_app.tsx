import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/utils/theme";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import styled from "@emotion/styled";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import LoginWrapper from "../src/components/LoginWrapper";
import { RecoilRoot } from "recoil";
import { useMemo, useState } from "react";
import RefreshError from "../src/class/RefreshError";
import storageKeys from "../src/constant/storageKeys";
import NextNProgress from "nextjs-progressbar";
import { ReactQueryDevtools } from "react-query/devtools";
import cookie from "react-cookies";

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
  const [queryClient] = useState(() => new QueryClient());

  const onError = async (err: unknown) => {
    if (err instanceof RefreshError) {
      await router.push("/login");
      localStorage.removeItem(storageKeys.accessToken);
      localStorage.removeItem(storageKeys.refreshToken);
      localStorage.removeItem(storageKeys.expiresAt);

      cookie.save(storageKeys.accessToken, "", {
        path: "/",
        httpOnly: true,
        expires: new Date(),
      });
      cookie.save(storageKeys.refreshToken, "", {
        path: "/",
        httpOnly: true,
        expires: new Date(),
      });
      cookie.save(storageKeys.expiresAt, "", {
        path: "/",
        httpOnly: true,
        expires: new Date(),
      });
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
            <Component {...pageProps} />
          </Inner>
        </Outer>
        <Footer />
      </Container>
    );
  }, [Component, pageProps, router.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            {content}
            <Toaster position="top-center" />
            <NextNProgress
              color={theme.colors.primary}
              height={3}
              showOnShallow={true}
              options={{ showSpinner: false }}
            />
            <ReactQueryDevtools />
          </RecoilRoot>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
