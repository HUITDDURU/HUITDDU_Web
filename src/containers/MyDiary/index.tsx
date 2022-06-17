import Head from "next/head";
import MyDiaryList from "../../components/MyDiaryList";
import MyInfoAside from "../../components/MyInfoAside";
import * as S from "./styles";

const MyDiaryContainer = () => {
  return (
    <>
      <Head>
        <title>마이 페이지 - 휘뚜루마뚜루</title>
      </Head>
      <S.Outer>
        <S.Container>
          <S.AsideContainer>
            <MyInfoAside />
          </S.AsideContainer>
          <MyDiaryList />
        </S.Container>
      </S.Outer>
    </>
  );
};

export default MyDiaryContainer;
