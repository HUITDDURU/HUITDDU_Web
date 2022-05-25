interface DiaryListItem {
  id: number;
  title: string;
  feeling: string;
  image?: string;
  content: string;
  date: string;
  writer: string;
  createdAt: string;
  userImage?: string;
}

type GetDiaryListResponse = {
  list: DiaryListItem[];
  matchedUserName: "rlawlsrms";
};

interface PostDiaryRequest {
  title: string;
  feeling: string;
  date: string;
  contents: string;
  imageUrl?: string;
}

export type { DiaryListItem, GetDiaryListResponse, PostDiaryRequest };
