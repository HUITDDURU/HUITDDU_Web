import { useTheme } from "@emotion/react";
import DiarySVG from "../DiarySVG";
import * as S from "./styles";

const DiaryHintSkeleton = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <div>
        {new Array(4).fill(0).map((_, index) => (
          <S.Diary style={{ zIndex: 4 - index }} key={index}>
            <DiarySVG color={theme.colors.grayscale.lightGray1} />
          </S.Diary>
        ))}
      </div>
      <div>
        <S.Content>
          <span>
            <b>user1234</b>
            님과
          </span>
          <div />
          <span>일기를 주고받아보세요.</span>
        </S.Content>
        <S.Flex>
          <S.Button>일기 쓰기</S.Button>
        </S.Flex>
      </div>
    </S.Container>
  );
};
export default DiaryHintSkeleton;
