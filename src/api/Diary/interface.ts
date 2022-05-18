interface DiaryListItem {
  id: number;
  title: string;
  feeling: string;
  image: string;
  content: string;
  date: string;
  writer: string;
  createdAt: string;
}

type GetDiaryListResponse = DiaryListItem[];

interface PostDiaryRequest {
  title: string;
  feeling: string;
  date: string;
  contents: string;
  imageUrl: string;
}

export type { DiaryListItem, GetDiaryListResponse, PostDiaryRequest };
