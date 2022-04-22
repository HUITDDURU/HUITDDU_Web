import gsap, { Power4 } from "gsap";
import { useCallback, useEffect, useRef } from "react";
import ANIMATED_CLASS from "../../constant/AnimatedClass";
import * as S from "./styles";

const RandomContainer = () => {
  const backdropRef = useRef<HTMLDivElement>(null);

  const backdropAnimation = useCallback(() => {
    if (!backdropRef.current) {
      return;
    }

    const gsapInstance = gsap.fromTo(
      backdropRef.current,
      { opacity: 0.5, scale: 1 },
      { opacity: 0, scale: 3, ease: Power4.easeOut, duration: 4, repeat: -1 }
    );

    return () => {
      gsapInstance.kill();
    };
  }, []);

  useEffect(() => {
    setTimeout(backdropAnimation, 500);
  }, [backdropAnimation]);

  return (
    <S.Container className={ANIMATED_CLASS}>
      <S.Title>무작위 사용자 찾는중...</S.Title>
      <S.ImageContainer>
        <S.Backdrop ref={backdropRef} />
        <S.ProfileImage />
      </S.ImageContainer>
    </S.Container>
  );
};

export default RandomContainer;
