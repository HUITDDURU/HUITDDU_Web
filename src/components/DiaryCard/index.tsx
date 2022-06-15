import { useTheme } from "@emotion/react";
import { FC } from "react";
import { DiaryItem } from "../../api/My/interface";
import * as S from "./styles";
import DefaultImage from "../../assets/images/default-user.png";
import ImageWithDefaultImage from "../ImageWithDefaultImage";
import Link from "next/link";
import moment from "moment";
import "moment/locale/ko";

const DiaryCard: FC<DiaryItem> = (props) => {
  const { currentUserImg, hoursAgo, isMyTurn, mateImg, mateName, diaryId } =
    props;
  const theme = useTheme();

  return (
    <Link href={`/diary/${diaryId}`} passHref>
      <S.Container>
        <S.ProfileContainer>
          <S.ProfileOuter>
            <S.Profile>
              <ImageWithDefaultImage
                src={currentUserImg}
                defaultImage={DefaultImage}
                alt="내 프로필 이미지"
                width={110}
                height={110}
                objectFit="cover"
                objectPosition="center"
              />
            </S.Profile>
          </S.ProfileOuter>
          <S.ProfileOuter>
            <S.Profile style={{ backgroundColor: theme.colors.secondary }}>
              <ImageWithDefaultImage
                src={mateImg}
                defaultImage={DefaultImage}
                alt="유저 프로필 이미지"
                width={110}
                height={110}
                objectFit="cover"
                objectPosition="center"
              />
            </S.Profile>
          </S.ProfileOuter>
        </S.ProfileContainer>
        <S.Title>{mateName}와의 일기장</S.Title>
        <S.InfoContainer>
          <S.Gray>{isMyTurn ? "내 차례" : `${mateName} 차례`}</S.Gray>
          <S.Gray>
            {!!hoursAgo &&
              `${moment().locale("ko").add(-hoursAgo, "hours").fromNow()}`}
          </S.Gray>
        </S.InfoContainer>
      </S.Container>
    </Link>
  );
};

export default DiaryCard;
