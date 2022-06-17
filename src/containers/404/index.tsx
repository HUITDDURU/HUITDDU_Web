import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import * as S from "./styles";
import Tewmoji from "react-twemoji";
import Link from "next/link";

const NotFoundContainer: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>페이지를 찾을 수 없습니다. - 휘뚜루마뚜루</title>
      </Head>
      <S.Container>
        <div>
          <S.Error>404</S.Error>
        </div>
        <Tewmoji
          options={{
            folder: "svg",
            ext: ".svg",
          }}
        >
          <S.Content>페이지를 찾을 수 없습니다. 😢</S.Content>
        </Tewmoji>
        <Link href="/" passHref>
          <S.ToMain>메인으로</S.ToMain>
        </Link>
      </S.Container>
    </Fragment>
  );
};

export default NotFoundContainer;
