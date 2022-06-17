import Head from "next/head";
import DiaryHint from "../../components/DiaryHint";
import DiaryMap from "../../components/DiaryMap";
import Status from "../../components/Status";
import ANIMATED_CLASS from "../../constant/animatedClass";
import { useMatchedUser } from "../../queries/Main";
import * as S from "./styles";

const MainContainer = () => {
  const query = useMatchedUser();

  return (
    <>
      <Head>
        <title>휘뚜루마뚜루</title>
      </Head>
      <S.Container>
        <S.Title className={ANIMATED_CLASS}> 진행중인 일기</S.Title>
        <S.ContentContainer>
          <S.Right>
            <div className={ANIMATED_CLASS}>
              <Status data={query} />
            </div>
            <DiaryHint data={query} />
          </S.Right>
          <DiaryMap />
        </S.ContentContainer>
      </S.Container>
    </>
  );
};

export default MainContainer;
