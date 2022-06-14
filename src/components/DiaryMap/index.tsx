import { useTheme } from "@emotion/react";
import moment from "moment";
import React, { Fragment, memo, useMemo, useRef } from "react";
import { DiaryProgressItem } from "../../api/Main/interface";
import ANIMATED_CLASS from "../../constant/animatedClass";
import { useDiaryProgress } from "../../queries/Main";
import * as S from "./styles";

const toString = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const getDiff = (d1: string, d2: string) => {
  const a = moment(d1, ["YYYY-MM-DD", "YYYY-MM-DDTHH:mm:ss"]);
  const b = moment(d2, ["YYYY-MM-DD", "YYYY-MM-DDTHH:mm:ss"]);
  const sec = a.diff(b, "minutes");

  return sec / 1440;
};

const DiaryMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const colors = useMemo(
    () => [theme.colors.secondary, ...Object.values(theme.colors.sub)],
    [theme.colors.secondary, theme.colors.sub]
  );
  const { data: list, isLoading, isError } = useDiaryProgress();

  const renderColumn = useMemo(() => {
    if (isLoading) {
      return <div></div>;
    }

    if (isError) {
      return <div></div>;
    }

    if (!list) {
      return <div></div>;
    }

    const dateMap = new Map<string, DiaryProgressItem[]>();
    const userMap = new Map<number, string>();
    const posMap = new Map<number, number>();
    let offset = -1;
    let index = 0;

    list.forEach((value) => {
      const { diary, id } = value;
      const { date } = diary;
      const d = toString(new Date(date));

      const keys = Array.from(dateMap.keys());

      let v: DiaryProgressItem[] = [];
      if (keys.includes(d)) {
        v = dateMap.get(d) || [];
      }

      const temp = [...v, value];

      dateMap.set(d, temp);

      const ukeys = Array.from(userMap.keys());

      if (!ukeys.includes(id) && !value.isMine) {
        const color = colors[index];
        index = (index + 1) % colors.length;

        userMap.set(id, color);
        posMap.set(id, offset);
        offset = offset === 1 ? -1 : 1;
      }
    });

    const keys = Array.from(dateMap.keys());

    return keys.map((key, index) => {
      const item = dateMap.get(key);

      if (!item) {
        return <Fragment />;
      }

      return (
        <S.Column key={key.toString() + index}>
          {item.map((elem, index) => {
            const timeList = list
              .filter((value) => value.id === elem.id)
              .map((value) => new Date(value.diary.date).getTime());

            const min = new Date(Math.min(...timeList));
            const max = new Date(Math.max(...timeList));
            const isStart =
              toString(min) === toString(new Date(elem.diary.date));
            const isEnd = toString(max) === toString(new Date(elem.diary.date));
            const rightRadius = isEnd ? 100 : 0;

            const color = elem.isMine
              ? theme.colors.primary
              : userMap.get(elem.id);
            const offset = elem.isMine ? 0 : posMap.get(elem.id) || -1;

            const style = {
              backgroundColor: color,
              top: `calc(50% + ${offset} * 80px)`,
            };
            const diff = getDiff(elem.diary.createdAt, key);

            const startStyle = {
              ...style,
              background: "transparent",
              borderColor: color,
            };

            return (
              <Fragment key={index}>
                {isStart && !elem.isMine ? (
                  offset === -1 ? (
                    <S.StartUp style={startStyle} />
                  ) : (
                    <S.StartDown style={startStyle} />
                  )
                ) : (
                  <S.Line
                    style={{
                      ...style,
                      borderTopRightRadius: rightRadius,
                      borderBottomRightRadius: rightRadius,
                    }}
                  />
                )}
                <S.Dot style={{ ...style, left: diff * 80 }} />
              </Fragment>
            );
          })}
          <S.Date className="date">
            {(new Date(key).getMonth() + 1).toString().padStart(2, "0")}/
            {new Date(key).getDate().toString().padStart(2, "0")}
          </S.Date>
        </S.Column>
      );
    });
  }, [colors, isError, isLoading, list, theme.colors.primary]);

  return (
    <S.Container className={ANIMATED_CLASS} ref={containerRef}>
      {renderColumn}
    </S.Container>
  );
};

export default memo(DiaryMap);
