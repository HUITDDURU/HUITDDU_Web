import { NextPage } from "next";
import * as S from "./styles";
import RandomUser from "../../assets/images/random-user.svg";
import Friend from "../../assets/images/friend.svg";
import Image from "next/image";

const ExchangeContainer: NextPage = () => {
  return (
    <S.Container>
      <S.Title>일기 교환 시작하기</S.Title>
      <S.ButtonContainer>
        <S.ButtonWrapper>
          <S.Button>
            <S.ButtonInner>
              <Image src={RandomUser} alt="random user" />
            </S.ButtonInner>
            <S.Name>무작위 사용자 찾아보기</S.Name>
            <S.Description>
              무작위 사용자를 찾아봐요.
              <br />
              교환 수락을 하게되면 일기 교환이 시작돼요.
            </S.Description>
          </S.Button>
          <S.Button>
            <S.ButtonInner>
              <Image src={Friend} alt="friend" />
            </S.ButtonInner>
            <S.Name>친구와 교환하기</S.Name>
            <S.Description>
              주어진 코드를 공유해
              <br />
              친구과 일기 교환을 할 수 있어요.
            </S.Description>
          </S.Button>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ExchangeContainer;
