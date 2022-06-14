import { useEffect, useState } from "react";
import io from "socket.io-client";
import socketBaseURL from "../../constant/socketBaseURL";
import storageKeys from "../../constant/storageKeys";
import socketEventName from "../../constant/socketEventName";
import { MatchingUser } from "../../@types/socketResponse";
import WaitingUser from "../../components/WaitingUser";

const RandomContainer = () => {
  const [loading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<MatchingUser | null>(null);
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
    return <WaitingUser />;
  }

  if (userInfo) {
  }

  return <></>;
};

export default RandomContainer;
