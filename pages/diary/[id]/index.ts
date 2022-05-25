import { GetServerSideProps } from "next";

export interface DiaryWriteSSRProps {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  DiaryWriteSSRProps
> = async (context) => {
  const { params } = context;

  return {
    props: {
      id: params?.id as string,
    },
  };
};

export { DiaryContainer as default } from "../../../src/containers";
