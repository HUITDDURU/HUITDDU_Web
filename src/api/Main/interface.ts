interface GetMatchedUserResponse {
  user1: string;
  user2: string;
  userImage1: string;
  userImage2: string;
}

interface DiaryProgressBody {
  id: number;
  title: string;
  date: string;
  writer: string;
  createdAt: string;
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
