import { ButtonHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children }, ref) => {
  return <S.Button ref={ref}>{children}</S.Button>;
});

Button.displayName = "Button";

export default Button;
