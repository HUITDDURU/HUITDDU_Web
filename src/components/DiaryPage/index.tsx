import * as S from "./styles";
import Editor from "../Editor";
import { DiaryListItem } from "../../api/Diary/interface";
import { FC } from "react";
import moment from "moment";
import Image from "next/image";
import ImageWithDefaultImage from "../ImageWithDefaultImage";
import DefaultImage from "../../assets/images/default-user.png";

const DiaryPage: FC<DiaryListItem> = (props) => {
  const { content, date, feeling, image, title, writer, userImage } = props;

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.UseContainer>
          <S.UserProfile>
            <ImageWithDefaultImage
              defaultImage={DefaultImage}
              src={userImage}
              width={32}
              height={32}
            />
          </S.UserProfile>
          <S.UserName>{writer}</S.UserName>
        </S.UseContainer>
      </S.TitleContainer>
      <S.Gray>날짜 : {moment(date).format("yyyy년 MM월 DD일")}</S.Gray>
      <S.Margin16 />
      <S.Gray>기분 : {feeling}</S.Gray>
      {image ? (
        <>
          <S.Margin40 />
          <S.ImageContainer>
            <S.ImageWrapper>
              <Image
                src={image}
                alt="업로드된 사진"
                objectFit="contain"
                width={500}
                height={500}
              />
            </S.ImageWrapper>
          </S.ImageContainer>
          <S.Margin40 />
        </>
      ) : (
        <S.Margin16 />
      )}
      <S.Margin40 />
      <S.Hr />
      <S.Margin8 />
      <Editor readOnly value={content} />
    </S.Container>
  );
};

export default DiaryPage;
