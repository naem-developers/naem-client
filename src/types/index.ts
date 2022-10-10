import { BoardType } from './board';

export type postedData = {
  boardType: BoardType;
  content: string;
  createdDate: string;
  postId: number;
  title: string;
  writerName: string;
  like?: number;
  comment?: any;
  tags?: Array<string>;
};

export type Comments = {
  userId: string;
  like: number;
  body: string;
  createdAt: Date;
};
