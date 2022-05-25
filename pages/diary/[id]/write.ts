import { GetServerSideProps } from "next";

export interface DiarySSRProps {
  id: string;
}

export const getServerSideProps: GetServerSideProps<DiarySSRProps> = async (
  context
) => {
  const { params } = context;

  return {
    props: {
      id: params?.id as string,
    },
  };
};

export { WriteDiaryContainer as default } from "../../../src/containers";
