import * as S from "./styles";
import LogoImage from "../../assets/images/login-logo.png";
import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import gsap, { Power4 } from "gsap";

const LoginWapper: FC = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const containerRef = useRef<HTMLDivElement>(null);

  const onComplete = useCallback(() => {
    setDisplayChildren(children);

    gsap.fromTo(
      containerRef.current,
      {
        yPercent: 10,
        duration: 0,
        opacity: 0,
      },
      {
        yPercent: 0,
        ease: Power4.easeOut,
        duration: 0.5,
        opacity: 1,
      }
    );
  }, [children]);

  const doAnim = useCallback(() => {
    if (displayChildren === children) {
      onComplete();
    } else {
      gsap.to(containerRef.current, {
        yPercent: -10,
        ease: Power4.easeOut,
        duration: 0.5,
        opacity: 0,
        onComplete: onComplete,
      });
    }
  }, [children, displayChildren, onComplete]);

  useEffect(() => {
    doAnim();
  }, [doAnim]);

  return (
    <S.Container>
      <S.LoginContainer ref={containerRef}>
        <S.LogoContainer>
          <Image
            height="120px"
            width="342px"
            objectFit="contain"
            src={LogoImage}
            alt="logo"
          />
        </S.LogoContainer>
        {displayChildren}
      </S.LoginContainer>
    </S.Container>
  );
};

export default LoginWapper;
