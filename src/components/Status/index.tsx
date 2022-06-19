import axios from "axios";
import { FC, memo, useState } from "react";
import { useQueryClient, UseQueryResult } from "react-query";
import { GetMatchedUserResponse } from "../../api/Main/interface";
import ImageWithDefaultImage from "../ImageWithDefaultImage";
import * as S from "./styles";
import DefaultImage from "../.././assets/images/default-user.png";
import { useTheme } from "@emotion/react";
import StatusSkeleton from "../StatusSkeleton";
import { useMatchingMutation } from "../../queries/Main";
import ConfirmModal from "../ConfirmModal";
import NoMatchingStatus from "../NoMatchingStatus";

interface PropsType {
  data: UseQueryResult<GetMatchedUserResponse>;
}

const Status: FC<PropsType> = (props) => {
  const { data: query } = props;
  const { data, isLoading, isError, error } = query;
  const theme = useTheme();
  const { mutateAsync } = useMatchingMutation();
  const [open, setOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const onStopClick = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onConfirm = async () => {
    setOpen(false);
    await mutateAsync();
    queryClient.invalidateQueries();
  };

  if (isLoading) {
    return <StatusSkeleton />;
  }

  if (isError && axios.isAxiosError(error) && error.response?.status === 404) {
    return <NoMatchingStatus />;
  }

  if (isError) {
    return (
      <S.Container>
        <S.ProfileOuter>
          <S.ProfileContainer>
            <S.Profile />
          </S.ProfileContainer>
        </S.ProfileOuter>
        <S.Content>
          <div>오류 발생</div>
        </S.Content>
      </S.Container>
    );
  }

  return (
    <>
      <S.Container>
        <S.ProfileOuter>
          <S.ProfileContainer>
            <S.Profile>
              <ImageWithDefaultImage
                width={150}
                height={150}
                src={data?.myImage}
                defaultImage={DefaultImage}
                objectFit="cover"
                objectPosition="center"
              />
            </S.Profile>
          </S.ProfileContainer>
          <S.ProfileContainer>
            <S.Profile style={{ backgroundColor: theme.colors.secondary }}>
              <ImageWithDefaultImage
                width={150}
                height={150}
                src={data?.opponentImage}
                defaultImage={DefaultImage}
                objectFit="cover"
                objectPosition="center"
              />
            </S.Profile>
          </S.ProfileContainer>
        </S.ProfileOuter>
        <S.Content>
          <div>
            <b>당신</b>과&nbsp;<b>{data?.opponent}</b>님이
          </div>
          <div>일기를 교환하고 있습니다.</div>
        </S.Content>
        <S.Stop onClick={onStopClick}>그만두기</S.Stop>
      </S.Container>
      <ConfirmModal
        onConfirm={onConfirm}
        open={open}
        onClose={onClose}
        title={`${data?.opponent}님과 \n일기 교환을 그만두기`}
        content="정말로 일기를 그만두시겠습니까?"
        confirmMessage="교환 그만두기"
      />
    </>
  );
};

export default memo(Status);
