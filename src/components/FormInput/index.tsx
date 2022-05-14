import Image from "next/image";
import {
  forwardRef,
  InputHTMLAttributes,
  memo,
  RefObject,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { InfoIcon } from "../../assets/icons";
import Input from "../Input";
import * as S from "./styles";
import { Tooltip } from "@nextui-org/react";

export interface FormInputRef {
  ref: RefObject<HTMLInputElement>;
  error: (message: string) => void;
}

interface PropsType {
  info?: string;
  title: string;
}

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & PropsType;

const FormInput = forwardRef<FormInputRef, FormInputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { info, title, ...rest } = props;
  const [errorMessage, setErrorMessage] = useState<string>("");

  const error = (message: string) => setErrorMessage(message);

  useImperativeHandle(ref, () => ({ ref: inputRef, error }));

  return (
    <div>
      <S.TitleWrapper>
        <S.TitleContainer>
          <S.Description>{title}</S.Description>
          {info && (
            <Tooltip rounded content={info} color="invert">
              <Image
                src={InfoIcon}
                alt="정보 아이콘"
                width={12}
                height={12}
                objectFit="contain"
                objectPosition="center"
              />
            </Tooltip>
          )}
        </S.TitleContainer>
        <S.Error>{errorMessage}</S.Error>
      </S.TitleWrapper>
      <Input ref={inputRef} {...rest} />
    </div>
  );
});

FormInput.displayName = "FormInput";

export default memo(FormInput);
