import { useTheme } from "@emotion/react";
import { useEffect, useMemo, useState } from "react";
import ANIMATED_CLASS from "../../constant/AnimatedClass";
import DiarySVG from "../DiarySVG";
import * as S from "./styles";

const DiaryHint = () => {
  const theme = useTheme();
  const [diarys, setDiarys] = useState<string[]>([]);
  const diaryCount = useMemo(() => 4, []);

  useEffect(() => {
    setDiarys(
      [
        ...Object.values(theme.colors.sub),
        theme.colors.primary,
        theme.colors.secondary,
      ].sort(() => (Math.random() > 0.5 ? 1 : -1))
    );
  }, [theme]);

  return (
    <S.Container className={ANIMATED_CLASS}>
      <div>
        {diarys.slice(0, diaryCount).map((value, index) => (
          <S.Diary style={{ zIndex: diaryCount - index }} key={value}>
            <DiarySVG color={value} />
          </S.Diary>
        ))}
      </div>
      <div>
        <S.Content>
          <div>
            <b>user1234</b>
            님과
          </div>
          <div>일기를 주고받아보세요.</div>
        </S.Content>
        <S.Flex>
          <S.Button>일기 쓰기</S.Button>
        </S.Flex>
      </div>
    </S.Container>
  );
};

export default DiaryHint;
