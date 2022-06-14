import { useEffect, useState } from "react";
import io from "socket.io-client";
import socketBaseURL from "../../constant/socketBaseURL";
import storageKeys from "../../constant/storageKeys";
import socketEventName from "../../constant/socketEventName";
import { MatchingUser } from "../../@types/socketResponse";
import WaitingUser from "../../components/WaitingUser";
import * as S from "./styles";
import RandomUserConfirm from "../../components/RandomUserConfirm";

const RandomContainer = () => {
  const [loading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<MatchingUser | null>({
    img: null,
    intro: null,
    name: "김진근",
  });
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

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
        socket.disconnect();
      };
    }
  }, [socket]);

  if (loading) {
    return (
      <S.Container>
        <WaitingUser />
      </S.Container>
    );
  }

  if (userInfo && socket) {
    return (
      <S.Container>
        <RandomUserConfirm {...userInfo} />
      </S.Container>
    );
  }

  return <></>;
};

export default RandomContainer;
