interface GetProfileResponse {
  name: string;
  intro: string;
  img: string | null;
}

export interface DiaryItem {
  diaryId: number;
  currentUserImg: string | null;
  mateImg: string | null;
  isMyTurn: boolean | null;
  mateName: string;
  hoursAgo: boolean | null;
}

type GetMyDiaryListResponse = DiaryItem[];

export type { GetProfileResponse, GetMyDiaryListResponse };
