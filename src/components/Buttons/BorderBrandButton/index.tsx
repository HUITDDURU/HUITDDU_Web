import { ButtonHTMLAttributes, forwardRef, memo } from "react";
import * as S from "./styles";

const BorderBrandButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return <S.Button ref={ref} {...props} />;
});

BorderBrandButton.displayName = "BorderBrandButton";

export default memo(BorderBrandButton);
