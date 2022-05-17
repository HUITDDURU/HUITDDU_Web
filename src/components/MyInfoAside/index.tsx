import Image from "next/image";
import ANIMATED_CLASS from "../../constant/animatedClass";
import { useProfile, useProfileMutation } from "../../queries/My";
import * as S from "./styles";
import DefaultImage from "../../assets/images/default-user.png";
import { ImageIcon } from "../../assets/icons";
import { useMemo, useRef } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import queryKeys from "../../constant/queryKeys";
import Intro from "../Intro";
import ImageWithDefaultImage from "../ImageWithDefaultImage";

const MyInfoAside = () => {
  const { data, isLoading, isError, isSuccess } = useProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { profileImageMutation } = useProfileMutation();
  const queryClient = useQueryClient();

  const intro = useMemo(() => {
    if (data?.data.intro && data.data.intro.trim() !== "") {
      return data.data.intro;
    }

    return null;
  }, [data]);

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (!file) return;

    await toast.promise(profileImageMutation.mutateAsync(file), {
      loading: "사진 업로드 중...",
      success: "사진 업로드 성공.",
      error: "사진 업로드 실패.",
    });

    queryClient.invalidateQueries([queryKeys.my]);
  };

  const onProfileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <S.Container className={ANIMATED_CLASS}>
      <S.Profile onClick={onProfileClick}>
        {isSuccess && (
          <ImageWithDefaultImage
            width={305}
            height={305}
            objectFit="cover"
            objectPosition="center"
            src={data.data.img}
            defaultImage={DefaultImage}
            alt="프로필 사진"
          />
        )}
        {isSuccess && (
          <>
            <S.ProfileOverlay className="overlay">
              <Image
                src={ImageIcon}
                alt="이미지 선택 아이콘"
                width={100}
                height={100}
                objectFit="contain"
                objectPosition="center"
              />
            </S.ProfileOverlay>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={onFileChange}
              onClick={(e) => e.stopPropagation()}
              accept="image/png, image/jpeg"
            />
          </>
        )}
      </S.Profile>
      {isLoading && <S.Name>로딩중</S.Name>}
      {isError && <S.Name>오류 발생</S.Name>}
      {isSuccess && <S.Name>{data.data.name}</S.Name>}
      <Intro
        isError={isError}
        isSuccess={isSuccess}
        isLoading={isLoading}
        intro={intro}
      />
    </S.Container>
  );
};

export default MyInfoAside;
