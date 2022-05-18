import axios, { AxiosResponse } from "axios";
import { FC, memo } from "react";
import { UseQueryResult } from "react-query";
import { GetMatchedUserResponse } from "../../api/Main/interface";
import ImageWithDefaultImage from "../ImageWithDefaultImage";
import * as S from "./styles";
import DefaultImage from "../.././assets/images/default-user.png";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import StatusSkeleton from "../StatusSkeleton";

interface PropsType {
  data: UseQueryResult<AxiosResponse<GetMatchedUserResponse, unknown>, unknown>;
}

const Status: FC<PropsType> = (props) => {
  const { data: query } = props;
  const { data, isLoading, isError, error } = query;
  const theme = useTheme();

  if (isLoading) {
    return <StatusSkeleton />;
  }

  if (isError && axios.isAxiosError(error) && error.response?.status === 404) {
    return (
      <S.Container>
        <S.ProfileOuter>
          <S.ProfileContainer>
            <S.Profile />
          </S.ProfileContainer>
        </S.ProfileOuter>
        <S.Content>
          <div>일기 교환 할 사람을</div>
          <div>정하지 않았습니다.</div>
        </S.Content>
        <S.Buttons>
          <Link href="/exchange/random" passHref>
            <S.Stop>무작위 사람과 교환</S.Stop>
          </Link>
          <Link href="/exchange/friend" passHref>
            <S.Stop>친구와 교환</S.Stop>
          </Link>
        </S.Buttons>
      </S.Container>
    );
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
    <S.Container>
      <S.ProfileOuter>
        <S.ProfileContainer>
          <S.Profile>
            <ImageWithDefaultImage
              width={150}
              height={150}
              src={data?.data.user1}
              defaultImage={DefaultImage}
            />
          </S.Profile>
        </S.ProfileContainer>
        <S.ProfileContainer>
          <S.Profile style={{ backgroundColor: theme.colors.secondary }}>
            <ImageWithDefaultImage
              width={150}
              height={150}
              src={data?.data.user2}
              defaultImage={DefaultImage}
            />
          </S.Profile>
        </S.ProfileContainer>
      </S.ProfileOuter>
      <S.Content>
        <div>
          <b>당신</b>과&nbsp;<b>{data?.data.user2}</b>님이
        </div>
        <div>일기를 교환하고 있습니다.</div>
      </S.Content>
      <S.Stop>그만두기</S.Stop>
    </S.Container>
  );
};

export default memo(Status);
