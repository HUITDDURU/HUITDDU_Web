interface GetMatchedUserResponse {
  me: string;
  opponent: string;
  myImage: string;
  opponentImage: string;
}

interface DiaryProgressBody {
  id: number;
  title: string;
  date: string;
  writer: string;
  createdAt: string;
  image: string | null;
  content: string;
}

interface DiaryProgressItem {
  id: number;
  diary: DiaryProgressBody;
  isMine: boolean;
}

type GetDiaryProgressResponse = DiaryProgressItem[];

export type {
  GetMatchedUserResponse,
  DiaryProgressItem,
  GetDiaryProgressResponse,
  DiaryProgressBody,
};
