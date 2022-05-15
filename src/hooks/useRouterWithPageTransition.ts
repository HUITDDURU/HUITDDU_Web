import { Mutex } from "async-mutex";
import { useRouter } from "next/router";
import { useCallback } from "react";

const mutex = new Mutex();

const useRouterWithPageTransition = () => {
  const router = useRouter();

  const push = useCallback(
    async (url: string, delay: number) => {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();

        try {
          await router.push(url);
          await new Promise<void>((resolve) => {
            setTimeout(() => {
              release();
              resolve();
            }, delay);
          });
        } finally {
          release();
        }
      }
    },
    [router]
  );

  return push;
};

export default useRouterWithPageTransition;
