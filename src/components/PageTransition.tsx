import gsap, { Power4 } from "gsap";
import { FC, useCallback, useEffect, useState } from "react";
import ANIMATED_CLASS from "../constant/AnimatedClass";

const PageTransition: FC = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);

  const onComplete = useCallback(() => {
    setDisplayChildren(children);

    gsap.fromTo(
      `.${ANIMATED_CLASS}`,
      {
        yPercent: 10,
        duration: 0,
        opacity: 0,
      },
      {
        yPercent: 0,
        ease: Power4.easeOut,
        stagger: 0.1,
        duration: 0.5,
        opacity: 1,
      }
    );
  }, [children]);

  useEffect(() => {
    if (displayChildren === children) {
      onComplete();
    } else {
      gsap.to(`.${ANIMATED_CLASS}`, {
        yPercent: -10,
        ease: Power4.easeOut,
        stagger: 0.1,
        duration: 0.5,
        opacity: 0,
        onComplete: onComplete,
      });
    }
  }, [children, displayChildren, onComplete]);

  return <>{displayChildren}</>;
};

export default PageTransition;
