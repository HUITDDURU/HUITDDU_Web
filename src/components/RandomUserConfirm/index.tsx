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
      {state === "LOADING" && <S.Title>{name}?????? ???????????????!</S.Title>}
      {state === "REFUSE" && (
        <S.Title>{name}?????? ????????? ?????????????????????</S.Title>
      )}
      {state === "ACCEPT" && (
        <S.Title>{name}?????? ?????? ????????? ???????????????!</S.Title>
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
          <S.OneLine>?????? ??????</S.OneLine>
          <S.Intro>
            {!intro || intro?.trim().length <= 0
              ? "?????? ????????? ????????????."
              : intro}
          </S.Intro>
        </S.IntroContainer>
      </S.Container>
      <S.ButtonContainer>
        {state === "LOADING" && (
          <>
            <S.Refuse onClick={onRefuse} disabled={loading}>
              ??????
            </S.Refuse>
            <S.Accept onClick={onAccept} disabled={loading}>
              ?????? ??????
            </S.Accept>
          </>
        )}
        {state === "REFUSE" && <S.Refuse>?????????</S.Refuse>}
        {state === "ACCEPT" && <S.Accept>?????? ?????? ???</S.Accept>}
      </S.ButtonContainer>
      {state === "REFUSE" && (
        <S.ButtonContainer>
          <S.TextButton onClick={matchingCancel}>?????? ??????</S.TextButton>
          <S.TextButton onClick={redo}>?????? ?????? ????????????</S.TextButton>
        </S.ButtonContainer>
      )}
    </S.Wrapper>
  );
};

export default RandomUserConfirm;
