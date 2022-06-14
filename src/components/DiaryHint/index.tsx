import { useTheme } from "@emotion/react";
import axios from "axios";
import { FC, memo, useEffect, useMemo, useState } from "react";
import { UseQueryResult } from "react-query";
import { GetMatchedUserResponse } from "../../api/Main/interface";
import ANIMATED_CLASS from "../../constant/animatedClass";
import DiaryHintSkeleton from "../DiaryHintSkeleton";
import DiarySVG from "../DiarySVG";
import * as S from "./styles";

interface PropsType {
  data: UseQueryResult<GetMatchedUserResponse>;
}

const DiaryHint: FC<PropsType> = (props) => {
  const { data: query } = props;
  const { isLoading, isError, data, error } = query;

  const theme = useTheme();
  const [diarys, setDiarys] = useState<string[]>([]);
  const diaryCount = useMemo(() => 4, []);

  useEffect(() => {
    setDiarys(
      [
        ...Object.values(theme.colors.sub),
        theme.colors.primary,
        theme.colors.secondary,
      ].sort(() => (Math.random() > 0.5 ? 1 : -1))
    );
  }, [theme]);

  const content = useMemo(() => {
    if (
      isError &&
      axios.isAxiosError(error) &&
      error.response?.status === 404
    ) {
      return (
        <S.Content>
          <div>사람을 정하고</div>
          <div>일기를 주고받아보세요.</div>
        </S.Content>
      );
    }

    if (isError) {
      return <S.Content>오류 발생</S.Content>;
    }

    return (
      <>
        <S.Content>
          <div>
            <b>{data?.user2}</b>
            님과
          </div>
          <div>일기를 주고받아보세요.</div>
        </S.Content>
        <S.Flex>
          <S.Button>일기 쓰기</S.Button>
        </S.Flex>
      </>
    );
  }, [data?.user2, error, isError]);

  if (isLoading) {
    return <DiaryHintSkeleton />;
  }

  return (
    <S.Container className={ANIMATED_CLASS}>
      <div>
        {diarys.slice(0, diaryCount).map((value, index) => (
          <S.Diary style={{ zIndex: diaryCount - index }} key={value}>
            <DiarySVG color={value} />
          </S.Diary>
        ))}
      </div>
      <div>{content}</div>
    </S.Container>
  );
};

export default memo(DiaryHint);
