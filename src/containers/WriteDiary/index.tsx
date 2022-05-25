import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useCallback, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import { DiaryWriteSSRProps } from "../../../pages/diary/[id]";
import BorderBrandButton from "../../components/Buttons/BorderBrandButton";
import Button from "../../components/Buttons/Button";
import Editor from "../../components/Editor";
import ANIMATED_CLASS from "../../constant/animatedClass";
import { useDiaryMutation } from "../../queries/Diary";
import { useImageMutation } from "../../queries/Image";
import * as S from "./styles";

const WriteDiaryContainer: FC<DiaryWriteSSRProps> = ({ id }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const diaryMutation = useDiaryMutation(Number(id));
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const imageMutation = useImageMutation();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [dates, setDates] = useState([
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

  const selectedDate = useMemo(() => {
    const now = moment();
    const checked = dates.find((value) => value.checked);
    if (!checked) {
      return now;
    }

    const { value } = checked;

    if (value === "today") {
      return now;
    }

    now.add(-1, "day");

    return now;
  }, [dates]);

  const onDateChange = useCallback((value: string) => {
    setDates((prev) => {
      return prev.map((item) => {
        item.checked = false;

        if (item.value === value) {
          item.checked = true;
        }
        return item;
      });
    });
  }, []);

  const [feelings, setFeelings] = useState([
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

  const onFeelingsChange = useCallback((value: string) => {
    setFeelings((prev) => {
      return prev.map((item) => {
        item.checked = false;

        if (value === item.value) {
          item.checked = true;
        }

        return item;
      });
    });
  }, []);

  const renderDates = useMemo(
    () =>
      dates.map((value) => (
        <div key={value.value}>
          <S.DateRadioInput
            type="radio"
            name="date"
            value={value.value}
            id={value.value}
            defaultChecked={value.checked}
            onClick={() => onDateChange(value.value)}
          />
          <S.DateRadioLabel htmlFor={value.value}>
            {value.label}
          </S.DateRadioLabel>
        </div>
      )),
    [dates, onDateChange]
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
            defaultChecked={value.checked}
            onClick={() => onFeelingsChange(value.value)}
          />
          <S.FeelingRadioLabel htmlFor={value.value}>
            {value.value}
          </S.FeelingRadioLabel>
        </div>
      )),
    [feelings, onFeelingsChange]
  );

  const onExchange = async () => {
    const feeling = feelings.find((value) => value.checked)?.value;

    if (!feeling || title.trim().length <= 0) {
      return;
    }

    await toast.promise(
      diaryMutation.mutateAsync({
        feeling,
        contents: content,
        date: selectedDate.format("yyyy-MM-DD"),
        imageUrl,
        title,
      }),
      { loading: "교환 중...", error: "교환 실패", success: "교환 성공!" }
    );
    router.push(`/diary/${id}`);
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const res = await toast.promise(imageMutation.mutateAsync(file), {
      loading: "이미지 업로드중...",
      success: "이미지 업로드 성공.",
      error: "이미지 업로드 실패. 다시 시도해주세요.",
    });

    const { imageUrl: image } = res.data;
    setImageUrl(image);
  };

  return (
    <S.Container>
      <S.Title className={ANIMATED_CLASS}>일기 쓰기</S.Title>
      <S.ContentContainer>
        <div className={ANIMATED_CLASS}>
          <S.Subtitle>제목</S.Subtitle>
          <S.TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요..."
            maxLength={100}
          />
        </div>
        <div className={ANIMATED_CLASS}>
          <S.Subtitle>날짜</S.Subtitle>
          <S.DateOuter>
            <S.DateContainer>{renderDates}</S.DateContainer>
            <span>선택된 날짜 : {selectedDate.format("yyyy년 MM월 DD일")}</span>
          </S.DateOuter>
        </div>
        <div className={ANIMATED_CLASS}>
          <S.Subtitle>기분</S.Subtitle>
          <S.FeelingContainer>{renderFeelings}</S.FeelingContainer>
        </div>
        <div className={ANIMATED_CLASS}>
          <S.Subtitle>사진</S.Subtitle>
          {imageUrl ? (
            <S.ImageContainer>
              <S.ImageWrapper onClick={() => inputRef.current?.click()}>
                <Image
                  src={imageUrl}
                  alt="업로드된 사진"
                  objectFit="contain"
                  width={500}
                  height={500}
                />
                <S.Cover className="cover" />
              </S.ImageWrapper>
            </S.ImageContainer>
          ) : (
            <BorderBrandButton onClick={() => inputRef.current?.click()}>
              사진 업로드
            </BorderBrandButton>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            onClick={(e) => e.stopPropagation()}
            onChange={onFileChange}
          />
        </div>
        <div className={ANIMATED_CLASS}>
          <S.Subtitle>내용</S.Subtitle>
          <Editor value={content} onChange={(e) => setContent(e)} />
        </div>
      </S.ContentContainer>
      <S.Buttons className={ANIMATED_CLASS}>
        <Button onClick={onExchange} disabled={title.trim().length <= 0}>
          교환
        </Button>
      </S.Buttons>
    </S.Container>
  );
};

export default WriteDiaryContainer;
