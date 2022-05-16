import React, { FC, memo, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import queryKeys from "../../constant/queryKeys";
import { useProfileMutation } from "../../queries/My";
import * as S from "./styles";

interface PropsType {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  intro: string | null;
}

const Intro: FC<PropsType> = (props) => {
  const { intro, isError, isLoading, isSuccess } = props;
  const [introValue, setIntroValue] = useState<string | null>(intro);
  const [isModifying, setIsModifying] = useState<boolean>(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { introMutation } = useProfileMutation();
  const queryClient = useQueryClient();

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setIntroValue(e.target.value);

  const onModifyClick = async () => {
    const rev = !isModifying;
    setIsModifying(rev);

    if (!rev) {
      await toast.promise(introMutation.mutateAsync(introValue || ""), {
        loading: "변경사항 적용 중...",
        error: "변경사항 적용 실패.",
        success: "변경사항 적용 성공.",
      });

      queryClient.invalidateQueries([queryKeys.my]);
    }
  };

  useEffect(() => {
    setIntroValue(intro);
  }, [intro]);

  useEffect(() => {
    if (isModifying) {
      inputRef.current?.focus();
    }
  }, [isModifying]);

  return (
    <>
      <S.DescriptionContainer>
        <S.Description>한줄 소개</S.Description>
        <S.ModifyButton
          disabled={introMutation.isLoading}
          onClick={onModifyClick}
        >
          {isModifying ? "완료" : "수정"}
        </S.ModifyButton>
      </S.DescriptionContainer>
      {isLoading && <S.OneLine>로딩중</S.OneLine>}
      {isError && <S.OneLine>오류 발생</S.OneLine>}
      {isSuccess &&
        (isModifying ? (
          <S.Input
            placeholder="한줄소개를 입력해주세요..."
            ref={inputRef}
            value={introValue || ""}
            onChange={onChange}
          />
        ) : (
          <S.OneLine>{intro || "한줄소개가 비어있습니다."}</S.OneLine>
        ))}
    </>
  );
};

export default memo(Intro);
