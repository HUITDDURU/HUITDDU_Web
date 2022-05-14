import { Mutex } from "async-mutex";
import { useRouter } from "next/router";

const mutex = new Mutex();

const useRouterWithPageTransition = () => {
  const router = useRouter();

  const push = async (url: string, delay: number) => {
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
  };

  return push;
};

export default useRouterWithPageTransition;
