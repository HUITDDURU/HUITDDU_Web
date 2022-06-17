import { useEffect, useState } from "react";
import io from "socket.io-client";
import socketBaseURL from "../../constant/socketBaseURL";
import storageKeys from "../../constant/storageKeys";
import socketEventName from "../../constant/socketEventName";
import { MatchingUser } from "../../@types/socketResponse";
import WaitingUser from "../../components/WaitingUser";
import * as S from "./styles";
import RandomUserConfirm from "../../components/RandomUserConfirm";
import Head from "next/head";

const RandomContainer = () => {
  const [loading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<MatchingUser | null>(null);
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  const onRefuse = () => {
    setIsLoading(true);
    setUserInfo(null);

    if (socket) {
      socket.emit(socketEventName.MATCHING_START);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem(storageKeys.accessToken);

    setSocket(
      io(socketBaseURL, {
        transports: ["websocket"],
        autoConnect: true,
        reconnection: true,
        query: {
          Authorization: token,
        },
      })
    );
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on(socketEventName.ON_MATCHED, (res: MatchingUser) => {
        setIsLoading(false);
        setUserInfo(res);
      });

      socket.emit(socketEventName.MATCHING_START);

      return () => {
        socket.emit(socketEventName.MATCHING_CANCEL);
        socket.disconnect();
      };
    }
  }, [socket]);

  if (loading) {
    return (
      <>
        <Head>
          <title>랜덤 유저 매칭중 - 휘뚜루마뚜루</title>
        </Head>
        <S.Container>
          <WaitingUser />
        </S.Container>
      </>
    );
  }

  if (userInfo && socket) {
    return (
      <>
        <Head>
          <title>{userInfo.name}과 매칭 - 휘뚜루마뚜루</title>
        </Head>
        <S.Container>
          <RandomUserConfirm
            refuse={onRefuse}
            data={userInfo}
            socket={socket}
          />
        </S.Container>
      </>
    );
  }

  return <></>;
};

export default RandomContainer;
