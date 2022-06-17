import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import queryKeys from "../../constant/queryKeys";
import useInput, { EventFilter } from "../../hooks/useInput";
import { useFriendMatchingMutation } from "../../queries/Friend";
import { useMatchedUserInterval } from "../../queries/Main";
import { useCode } from "../../queries/My";
import * as S from "./styles";

const FriendContainer = () => {
  const maxCodeLength = 6;
  const { data } = useCode();
  const { isSuccess } = useMatchedUserInterval();
  const router = useRouter();
  const { mutateAsync, isLoading } = useFriendMatchingMutation();
  const queryClient = useQueryClient();

  const evnetFilter: EventFilter = (e) => {
    let v = e.target.value.toUpperCase();

    let temp = "";

    v.split("").forEach((value) => {
      if (/[0-9]/g.test(value)) {
        temp += value;
      }
    });

    v = temp;

    if (e.target.value.length > maxCodeLength) {
      v = v.substring(0, maxCodeLength);
    }

    e.target.value = v;
    return e;
  };

  const [inputProps, [value]] = useInput("", evnetFilter);
  const active = useMemo(
    () => value.toString().length >= maxCodeLength,
    [value]
  );

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = async (e) => {
    const v = value.toString();

    if (e.key === "Enter" && v.length > 0 && !isLoading) {
      try {
        await toast.promise(
          mutateAsync(v),
          {
            loading: "매칭 요청 중",
            error: "매칭 요청 실패. \n코드를 확인해주세요.",
            success: "매칭 요청 성공",
          },
          { style: { textAlign: "center" } }
        );

        queryClient.invalidateQueries([queryKeys.matchedUser]);
      } catch (error) {}
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess, router]);

  return (
    <>
      <Head>
        <title>친구와 일기교환 - 휘뚜루마뚜루</title>
      </Head>
      <S.Container>
        <S.Title>당신의 코드는 {data?.code}</S.Title>
        <S.CodeDescription>
          친구에게 코드를 보내고 일기 교환을 시작하세요.
        </S.CodeDescription>
        <S.Or>또는</S.Or>
        <S.LastDescription>
          친구에게 받은 코드를 입력해서 일기 교환을 시작하세요.
        </S.LastDescription>
        <div>
          <S.CodeInput
            {...inputProps}
            onKeyDown={onKeyDown}
            placeholder="입력해주세요..."
          />
        </div>
        <div>
          <S.Enter className={`${active ? "active" : ""}`}>
            Enter 키로 시작
          </S.Enter>
        </div>
      </S.Container>
    </>
  );
};

export default FriendContainer;
