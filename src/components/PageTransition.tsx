import gsap, { Power4 } from "gsap";
import { FC, useCallback, useEffect, useState } from "react";
import ANIMATED_CLASS from "../constant/animatedClass";

const PageTransition: FC = ({ children }) => {
  const [displayChildren, setDisplayChildren] = useState(children);
  const transitionOffset = 50 as const;
  const transitionDuration = 0.5;
  const transitionStagger = 0.1;

  const onComplete = useCallback(() => {
    setDisplayChildren(children);

    gsap.fromTo(
      `.${ANIMATED_CLASS}`,
      {
        y: transitionOffset,
        duration: 0,
        opacity: 0,
      },
      {
        y: 0,
        ease: Power4.easeOut,
        stagger: transitionStagger,
        duration: transitionDuration,
        opacity: 1,
      }
    );
  }, [children]);

  useEffect(() => {
    if (displayChildren === children) {
      onComplete();
    } else {
      gsap.to(`.${ANIMATED_CLASS}`, {
        y: -transitionOffset,
        ease: Power4.easeOut,
        stagger: transitionStagger,
        duration: transitionDuration,
        opacity: 0,
        onComplete: onComplete,
      });
    }
  }, [children, displayChildren, onComplete]);

  return <>{displayChildren}</>;
};

export default PageTransition;
