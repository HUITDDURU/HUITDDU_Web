import { ButtonHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

const BorderButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <S.Button ref={ref} {...props} />;
});

BorderButton.displayName = "BorderButton";

export default BorderButton;
