import * as S from "./styles";
import gsap, { Power4 } from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { useProfile } from "../../queries/My";
import ImageWithDefaultImage from "../../components/ImageWithDefaultImage";
import DefaultImage from "../../assets/images/default-user.png";

const WaitingUser = () => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [dot, setDot] = useState<number>(0);
  const findAnimationRef = useRef<gsap.core.Tween | null>(null);
  const { data } = useProfile();

  const backdropAnimation = useCallback(() => {
    if (!backdropRef.current) {
      return;
    }

    findAnimationRef.current = gsap.fromTo(
      backdropRef.current,
      { opacity: 0.5, scale: 1 },
      { opacity: 0, scale: 3, ease: Power4.easeOut, duration: 4, repeat: -1 }
    );
  }, []);

  const nextDot = useCallback(() => {
    setDot((prev) => (prev + 1) % 4);
    setTimeout(nextDot, 1000);
  }, []);

  useEffect(() => {
    setTimeout(backdropAnimation, 500);
    setTimeout(nextDot, 1000);

    return () => {
      if (findAnimationRef.current) {
        findAnimationRef.current.kill();
      }
    };
  }, [backdropAnimation, nextDot]);

  return (
    <>
      <S.Title>무작위 사용자 찾는중{".".repeat(dot)}</S.Title>
      <S.ImageContainer>
        <S.Backdrop ref={backdropRef} />
        <S.ProfileImage>
          <ImageWithDefaultImage
            width={200}
            height={200}
            defaultImage={DefaultImage}
            src={data?.img || DefaultImage}
            objectFit="cover"
            objectPosition="center"
          />
        </S.ProfileImage>
      </S.ImageContainer>
    </>
  );
};

export default WaitingUser;
