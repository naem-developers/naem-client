export type postedData = {
  id: number;
  type: string;
  title: string;
  body: string;
  userId: string;
  tags: string[];
  like: number;
  comment: number;
  boardType?: string;
  createdAt: Date;
  comments: Array<Comments>;
};

export type Comments = {
  userId: string;
  like: number;
  body: string;
  createdAt: Date;
};

export type Comments = {
  userId: string;
  like: number;
  commnet: string;
  date: Date;
};
