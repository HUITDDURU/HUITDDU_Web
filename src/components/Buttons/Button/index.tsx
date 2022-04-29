import { ButtonHTMLAttributes, forwardRef, memo } from "react";
import * as S from "./styles";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <S.Button ref={ref} {...props} />;
});

Button.displayName = "Button";

export default memo(Button);
