import React from "react";
import ANIMATED_CLASS from "../../constant/AnimatedClass";
import useInput, { EventFilter } from "../../hooks/useInput";
import * as S from "./styles";

const FriendContainer = () => {
  const maxCodeLength = 6;

  const evnetFilter: EventFilter = (e) => {
    let v = e.target.value.toUpperCase();

    let temp = "";

    v.split("").forEach((value) => {
      if (/[A-Z]/g.test(value)) {
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

  return (
    <S.Container>
      <S.Title className={ANIMATED_CLASS}>당신의 코드는 JYCNKF</S.Title>
      <S.CodeDescription className={ANIMATED_CLASS}>
        친구에게 코드를 보내고 일기 교환을 시작하세요.
      </S.CodeDescription>
      <S.Or className={ANIMATED_CLASS}>또는</S.Or>
      <S.LastDescription className={ANIMATED_CLASS}>
        친구에게 받은 코드를 입력해서 일기 교환을 시작하세요.
      </S.LastDescription>
      <div className={ANIMATED_CLASS}>
        <S.CodeInput {...inputProps} placeholder="입력해주세요..." />
      </div>
      <div className={ANIMATED_CLASS}>
        <S.Enter
          className={`${
            value.toString().length >= maxCodeLength ? "active" : ""
          }`}
        >
          Enter 키로 시작
        </S.Enter>
      </div>
    </S.Container>
  );
};

export default FriendContainer;
