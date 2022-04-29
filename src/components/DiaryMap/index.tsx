import { useTheme } from "@emotion/react";
import moment from "moment";
import React, { Fragment, useMemo, useRef } from "react";
import ANIMATED_CLASS from "../../constant/AnimatedClass";
import * as S from "./styles";

export interface Dot {
  userId: number;
  diary: {
    id: number;
    title: string;
    date: string;
    writer: string;
    createdAt: string;
  };
  isMine: boolean;
}

const getDiary = (date: string) => ({
  id: 1,
  title: "제목",
  date: date,
  writer: "김진근",
  createdAt: date,
});

const data: Dot[] = [
  {
    userId: 1,
    diary: getDiary("2022-04-01"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-02"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-03"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-04"),
    isMine: true,
  },
  {
    userId: 2,
    diary: getDiary("2022-04-02T09:00:00"),
    isMine: false,
  },
  {
    userId: 2,
    diary: getDiary("2022-04-03"),
    isMine: false,
  },
  {
    userId: 2,
    diary: getDiary("2022-04-04"),
    isMine: false,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-05T09:00:00"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-06"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-07"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-15"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-16"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-17"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-18"),
    isMine: true,
  },
  {
    userId: 1,
    diary: getDiary("2022-04-19"),
    isMine: true,
  },
  {
    userId: 3,
    diary: getDiary("2022-04-05T03:00:00"),
    isMine: false,
  },
  {
    userId: 3,
    diary: getDiary("2022-04-06"),
    isMine: false,
  },
  {
    userId: 3,
    diary: getDiary("2022-04-07"),
    isMine: false,
  },
  {
    userId: 4,
    diary: getDiary("2022-04-07T09:00:00"),
    isMine: false,
  },
];

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
  const list = useMemo(
    () =>
      data.sort(
        (a, b) =>
          new Date(a.diary.date).getTime() - new Date(b.diary.date).getTime()
      ),
    []
  );

  const renderColumn = useMemo(() => {
    const dateMap = new Map<string, Dot[]>();
    const userMap = new Map<number, string>();
    const posMap = new Map<number, number>();
    let offset = -1;
    let index = 0;

    list.forEach((value) => {
      const { diary, userId } = value;
      const { date } = diary;
      const d = toString(new Date(date));

      const keys = Array.from(dateMap.keys());

      let v: Dot[] = [];
      if (keys.includes(d)) {
        v = dateMap.get(d) || [];
      }

      const temp = [...v, value];

      dateMap.set(d, temp);

      const ukeys = Array.from(userMap.keys());

      if (!ukeys.includes(userId) && !value.isMine) {
        const color = colors[index];
        index = (index + 1) % colors.length;

        userMap.set(userId, color);
        posMap.set(userId, offset);
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
              .filter((value) => value.userId === elem.userId)
              .map((value) => new Date(value.diary.date).getTime());

            const min = new Date(Math.min(...timeList));
            const max = new Date(Math.max(...timeList));
            const isStart =
              toString(min) === toString(new Date(elem.diary.date));
            const isEnd = toString(max) === toString(new Date(elem.diary.date));
            const rightRadius = isEnd ? 100 : 0;

            const color = elem.isMine
              ? theme.colors.primary
              : userMap.get(elem.userId);
            const offset = elem.isMine ? 0 : posMap.get(elem.userId) || -1;

            const style = {
              backgroundColor: color,
              top: `calc(50% + ${offset} * 80px)`,
            };
            const diff = getDiff(elem.diary.date, key);

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
  }, [colors, list, theme.colors.primary]);

  return (
    <S.Container className={ANIMATED_CLASS} ref={containerRef}>
      {renderColumn}
    </S.Container>
  );
};

export default DiaryMap;
