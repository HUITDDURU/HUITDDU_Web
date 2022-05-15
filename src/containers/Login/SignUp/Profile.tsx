import { Image } from "@nextui-org/react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useCallback, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import signUpState from "../../../atom/signUpState";
import Button from "../../../components/Buttons/Button";
import FormInput from "../../../components/FormInput";
import useRouterWithPageTransition from "../../../hooks/useRouterWithPageTransition";
import { useRegister } from "../../../queries/Auth";
import { useImageMutation } from "../../../queries/Image";
import * as S from "../styles";

const ProfileContainer: NextPage = () => {
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const { isEmailConfirmationed } = signUp;
  const push = useRouterWithPageTransition();
  const { nickname, intro, profilePicture } = signUp;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageMutation = useImageMutation();
  const registerMutation = useRegister();
  const router = useRouter();

  const nextDisabled =
    [nickname].some((value) => value.trim().length <= 0) ||
    registerMutation.isLoading ||
    imageMutation.isLoading;

  const checkEmail = useCallback(async () => {
    if (!isEmailConfirmationed) {
      await push("enterinfo", 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEmailConfirmationed]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignUp((prev) => ({ ...prev, [name]: value }));
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

    const { imageUrl } = res.data;
    setSignUp((prev) => ({ ...prev, profilePicture: imageUrl }));
  };

  const onRegister = async () => {
    const { email, intro, nickname, password, profilePicture } = signUp;

    try {
      await toast.promise(
        registerMutation.mutateAsync({
          email,
          imageUrl: profilePicture,
          password: password,
          intro,
          name: nickname,
        }),
        {
          loading: "회원가입 중...",
          error: "회원가입 실패. 다시 시도해주세요.",
          success: "회원가입 성공",
        }
      );

      router.push("/login");
    } catch (error) {}
  };

  useEffect(() => {
    checkEmail();
  }, [checkEmail]);

  return (
    <div>
      <S.Title>프로필 정보 입력</S.Title>
      <S.InputContainer>
        <FormInput
          title="닉네임"
          placeholder="닉네임을 입력해주세요..."
          onChange={onChangeHandler}
          value={nickname}
          name="nickname"
        />
        <FormInput
          title="한줄소개"
          placeholder="한줄소개를 입력해주세요..."
          onChange={onChangeHandler}
          value={intro}
          name="intro"
        />
        <div>
          <S.Description>프로필 사진</S.Description>
          {profilePicture !== "" && (
            <S.ProfileWrapper>
              <S.ProfileContainer>
                <Image
                  width="171px"
                  height="171px"
                  objectFit="cover"
                  src={profilePicture}
                  alt="프로필 이미지"
                  showSkeleton
                />
              </S.ProfileContainer>
            </S.ProfileWrapper>
          )}
          <S.ImageButton
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current?.click();
            }}
          >
            사진 업로드
          </S.ImageButton>
          <input
            ref={fileInputRef}
            onClick={(e) => e.stopPropagation()}
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            onChange={onFileChange}
          />
        </div>
      </S.InputContainer>
      <S.BottomContainer>
        <S.ToLogin>
          <Link href="/login">로그인으로</Link>
        </S.ToLogin>
        <S.ButtonContainer>
          <S.Page>3 / 3</S.Page>
          <S.ToLogin>
            <Link href="/login/signup/enterinfo">이전</Link>
          </S.ToLogin>
          <Button disabled={nextDisabled} onClick={onRegister}>
            회원가입
          </Button>
        </S.ButtonContainer>
      </S.BottomContainer>
    </div>
  );
};

export default memo(ProfileContainer);
