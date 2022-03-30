import { ButtonHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

const BorderButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children }, ref) => {
  return <S.Button ref={ref}>{children}</S.Button>;
});

BorderButton.displayName = "BorderButton";

export default BorderButton;
