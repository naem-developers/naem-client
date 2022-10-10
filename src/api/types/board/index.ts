import { BoardType } from '@/types/board';

export interface IReqSaveBoard {
  requestDto: {
    title: string;
    content: string;
    tag?: Array<any>;
    board: {
      boardType?: number;
    };
  };
}

export interface IReqGetPosts {
  cursor: number;
  pageSize?: number;
  offset?: number;
  boardType?: BoardType;
  keyword?: string;
  sort?: boolean;
}
