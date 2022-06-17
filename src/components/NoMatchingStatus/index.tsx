import Link from "next/link";
import { useProfile } from "../../queries/My";
import ImageWithDefaultImage from "../ImageWithDefaultImage";
import * as S from "./styles";
import DefaultImage from "../.././assets/images/default-user.png";

const NoMatchingStatus = () => {
  const { data } = useProfile();

  return (
    <S.Container>
      <S.ProfileOuter>
        <S.ProfileContainer>
          <S.Profile>
            <ImageWithDefaultImage
              width={150}
              height={150}
              objectFit="cover"
              objectPosition="center"
              src={data?.img || DefaultImage}
              defaultImage={DefaultImage}
              alt="프로필 사진"
            />
          </S.Profile>
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
};

export default NoMatchingStatus;
