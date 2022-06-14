import { FC, useEffect, useState } from "react";
import { MatchingUser } from "../../@types/socketResponse";
import ImageWithDefaultImage from "../ImageWithDefaultImage";
import DefaultImage from "../../assets/images/default-user.png";
import * as S from "./styles";
import confetti from "canvas-confetti";
import socketEventName from "../../constant/socketEventName";
import { useRouter } from "next/router";

interface PropsType {
  data: MatchingUser;
  socket: SocketIOClient.Socket;
  refuse: () => void;
}

type MatchingState = "LOADING" | "ACCEPT" | "REFUSE";

const RandomUserConfirm: FC<PropsType> = (props) => {
  const { img, intro, name } = props.data;
  const { socket, refuse: refuse } = props;
  const [state, setState] = useState<MatchingState>("LOADING");
  const [loading, setLoding] = useState<boolean>(false);
  const router = useRouter();

  const startConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    const fire = (particleRatio: number, opts: unknown) => {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    };

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
  };

  const onAccept = () => {
    setLoding(true);
    socket.emit(socketEventName.MATCHING_DECISION, { accept: true });
  };

  const onRefuse = () => {
    setLoding(true);
    socket.emit(socketEventName.MATCHING_DECISION, { accept: false });
  };

  useEffect(() => {
    startConfetti();
  }, []);

  useEffect(() => {
    socket.on(socketEventName.ON_CANCEL, () => {
      setState("REFUSE");
      setLoding(false);
    });

    socket.on(socketEventName.ON_SUCCESS, () => {
      setState("ACCEPT");
      startConfetti();
      setLoding(false);

      setTimeout(() => {
        router.push("/");
      }, 3000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const matchingCancel = () => {
    router.push("/exchange");
  };

  const redo = () => {
    refuse();
  };

  return (
    <S.Wrapper>
      {state === "LOADING" && <S.Title>{name}님을 찾았습니다!</S.Title>}
      {state === "REFUSE" && (
        <S.Title>{name}님과 매칭이 취소되었습니다</S.Title>
      )}
      {state === "ACCEPT" && (
        <S.Title>{name}님과 일기 교환을 시작합니다!</S.Title>
      )}
      <S.Container>
        <S.Image>
          <ImageWithDefaultImage
            defaultImage={DefaultImage}
            src={img || DefaultImage}
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
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
        {state === "LOADING" && (
          <>
            <S.Refuse onClick={onRefuse} disabled={loading}>
              거절
            </S.Refuse>
            <S.Accept onClick={onAccept} disabled={loading}>
              교환 시작
            </S.Accept>
          </>
        )}
        {state === "REFUSE" && <S.Refuse>거절됨</S.Refuse>}
        {state === "ACCEPT" && <S.Accept>교환 시작 됨</S.Accept>}
      </S.ButtonContainer>
      {state === "REFUSE" && (
        <S.ButtonContainer>
          <S.TextButton onClick={matchingCancel}>매칭 취소</S.TextButton>
          <S.TextButton onClick={redo}>다시 매칭 시작하기</S.TextButton>
        </S.ButtonContainer>
      )}
    </S.Wrapper>
  );
};

export default RandomUserConfirm;
