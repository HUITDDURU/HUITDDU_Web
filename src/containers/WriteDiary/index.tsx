import { useMemo, useState } from "react";
import BorderBrandButton from "../../components/Buttons/BorderBrandButton";
import Button from "../../components/Buttons/Button";
import Editor from "../../components/Editor";
import * as S from "./styles";

const WriteDiaryContainer = () => {
  const [dates] = useState([
    {
      value: "today",
      label: "오늘",
      checked: true,
    },
    {
      value: "yesterday",
      label: "어제",
      checked: false,
    },
  ]);

  const [feelings] = useState([
    {
      value: "😆",
      checked: true,
    },
    {
      value: "😭",
      checked: false,
    },
    {
      value: "🤬",
      checked: false,
    },
    {
      value: "😖",
      checked: false,
    },
    {
      value: "🤔",
      checked: false,
    },
    {
      value: "🥳",
      checked: false,
    },
    {
      value: "🤩",
      checked: false,
    },
    {
      value: "😘",
      checked: false,
    },
    {
      value: "😐",
      checked: false,
    },
    {
      value: "😣",
      checked: false,
    },
  ]);

  const renderDates = useMemo(
    () =>
      dates.map((value) => (
        <div key={value.value}>
          <S.DateRadioInput
            type="radio"
            name="date"
            value={value.value}
            id={value.value}
            checked={value.checked}
          />
          <S.DateRadioLabel htmlFor={value.value}>
            {value.label}
          </S.DateRadioLabel>
        </div>
      )),
    [dates]
  );

  const renderFeelings = useMemo(
    () =>
      feelings.map((value) => (
        <div key={value.value}>
          <S.FeelingRadioInput
            type="radio"
            name="feeling"
            value={value.value}
            id={value.value}
            checked={value.checked}
          />
          <S.FeelingRadioLabel htmlFor={value.value}>
            {value.value}
          </S.FeelingRadioLabel>
        </div>
      )),
    [feelings]
  );

  return (
    <S.Container>
      <S.Title>일기 쓰기</S.Title>
      <S.ContentContainer>
        <div>
          <S.Subtitle>제목</S.Subtitle>
          <S.TitleInput placeholder="제목을 입력해주세요..." maxLength={100} />
        </div>
        <div>
          <S.Subtitle>날짜</S.Subtitle>
          <S.DateOuter>
            <S.DateContainer>{renderDates}</S.DateContainer>
            <span>선택된 날짜 : 2022년 1월 1일</span>
          </S.DateOuter>
        </div>
        <div>
          <S.Subtitle>기분</S.Subtitle>
          <S.FeelingContainer>{renderFeelings}</S.FeelingContainer>
        </div>
        <div>
          <S.Subtitle>사진</S.Subtitle>
          <BorderBrandButton>사진 업로드</BorderBrandButton>
        </div>
        <div>
          <S.Subtitle>내용</S.Subtitle>
          <Editor />
        </div>
      </S.ContentContainer>
      <S.Buttons>
        <Button>교환</Button>
      </S.Buttons>
    </S.Container>
  );
};

export default WriteDiaryContainer;
