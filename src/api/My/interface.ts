interface GetProfileResponse {
  name: string;
  intro: string;
  img: string | null;
}

interface DiaryItem {
  diaryId: number;
  currentUserImg: string | null;
  mateImg: string | null;
  isMyTurn: boolean | null;
  mateName: string;
  hoursAgo: number | null;
}

type GetMyDiaryListResponse = DiaryItem[];

interface GetCodeResponse {
  code: string;
}

export type {
  GetProfileResponse,
  GetMyDiaryListResponse,
  DiaryItem,
  GetCodeResponse,
};
