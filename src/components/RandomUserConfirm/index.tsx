import { FC, useEffect } from "react";
import { MatchingUser } from "../../@types/socketResponse";
import ImageWithDefaultImage from "../ImageWithDefaultImage";
import DefaultImage from "../../assets/images/default-user.png";
import * as S from "./styles";
import confetti from "canvas-confetti";

const RandomUserConfirm: FC<MatchingUser> = (props) => {
  const { img, intro, name } = props;

  useEffect(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: unknown) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  });

  return (
    <S.Wrapper>
      <S.Title>{name}(을)를 찾았습니다!</S.Title>
      <S.Container>
        <S.Image>
          <ImageWithDefaultImage
            defaultImage={DefaultImage}
            src={img || DefaultImage}
          />
        </S.Image>
        <S.IntroContainer>
          <S.OneLine>한줄 소개</S.OneLine>
          <S.Intro>
            {!intro || intro?.trim().length <= 0
              ? "한줄 소개가 없습니다."
              : intro}
          </S.Intro>
        </S.IntroContainer>
      </S.Container>
      <S.ButtonContainer>
        <S.Refuse>거절</S.Refuse>
        <S.Accept>승인</S.Accept>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default RandomUserConfirm;
