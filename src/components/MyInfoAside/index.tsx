import Image from "next/image";
import ANIMATED_CLASS from "../../constant/animatedClass";
import { useProfile } from "../../queries/My";
import * as S from "./styles";
import DefaultImage from "../../assets/images/default-user.png";
import { useEffect, useMemo, useState } from "react";

const MyInfoAside = () => {
  const { data, isLoading, isError, isSuccess } = useProfile();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onImageError = () => {
    setImageUrl(DefaultImage.src);
  };

  const intro = useMemo(() => {
    if (data?.data.intro && data.data.intro.trim() !== "") {
      return data.data.intro;
    }

    return null;
  }, [data]);

  useEffect(() => {
    if (data) {
      setImageUrl(data.data.img);
    } else {
      setImageUrl(null);
    }
  }, [data]);

  return (
    <S.Container className={ANIMATED_CLASS}>
      <S.Profile>
        {isSuccess && (
          <Image
            width={305}
            height={305}
            objectFit="cover"
            objectPosition="center"
            onError={onImageError}
            src={imageUrl || DefaultImage}
            alt="프로필 사진"
          />
        )}
      </S.Profile>
      {isLoading && <S.Name>로딩중</S.Name>}
      {isError && <S.Name>오류 발생</S.Name>}
      {isSuccess && <S.Name>{data.data.name}</S.Name>}
      <S.Description>한줄 소개</S.Description>
      {isLoading && <S.OneLine>로딩중</S.OneLine>}
      {isError && <S.OneLine>오류 발생</S.OneLine>}
      {isSuccess && (
        <S.OneLine>{intro || "한줄소개가 비어있습니다."}</S.OneLine>
      )}
    </S.Container>
  );
};

export default MyInfoAside;
