import { GetServerSideProps } from "next";

export interface DiarySSRProps {
  id: string;
}

export const getServerSideProps: GetServerSideProps<DiarySSRProps> = async (
  ctx
) => {
  const { params } = ctx;

  return {
    props: {
      id: params?.id as string,
    },
  };
};

export { WriteDiaryContainer as default } from "../../../src/containers";
