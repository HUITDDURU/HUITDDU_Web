import { NextPage } from "next";
import * as S from "./styles";
import RandomUser from "../../assets/images/random-user.svg";
import Friend from "../../assets/images/friend.svg";
import ANIMATED_CLASS from "../../constant/animatedClass";
import ExchangeOptionButton from "../../components/ExchangeOptionButton";
import Head from "next/head";

const ExchangeContainer: NextPage = () => {
  return (
    <>
      <Head>
        <title>일기 교환 시작하기 - 휘뚜루마뚜루</title>
      </Head>
      <S.Container>
        <S.Title className={ANIMATED_CLASS}>일기 교환 시작하기</S.Title>
        <S.ButtonContainer>
          <S.ButtonWrapper>
            <ExchangeOptionButton
              to="/exchange/random"
              name="무작위 사용자 찾아보기"
              description={
                "무작위 사용자를 찾아봐요.\n교환 수락을 하게되면 일기 교환이 시작돼요."
              }
              image={RandomUser}
            />
            <ExchangeOptionButton
              to="/exchange/friend"
              name="친구와 교환하기"
              description={
                "주어진 코드를 공유해\n친구과 일기 교환을 할 수 있어요."
              }
              image={Friend}
            />
          </S.ButtonWrapper>
        </S.ButtonContainer>
      </S.Container>
    </>
  );
};

export default ExchangeContainer;
