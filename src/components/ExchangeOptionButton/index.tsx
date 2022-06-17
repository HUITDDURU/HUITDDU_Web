import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";
import * as S from "./styles";

interface PropsType {
  name: string;
  description: string;
  image: string;
  to: string;
}

const ExchangeOptionButton: FC<PropsType> = ({
  description,
  image,
  name,
  to,
}) => {
  return (
    <Link href={to} passHref>
      <S.Button>
        <S.ButtonInner>
          <Image src={image} alt="option" />
        </S.ButtonInner>
        <S.Name>{name}</S.Name>
        <S.Description>
          {description.split("\n").map((value, index) => {
            return <div key={`${value}_${index}`}>{value}</div>;
          })}
        </S.Description>
      </S.Button>
    </Link>
  );
};
export default memo(ExchangeOptionButton);
