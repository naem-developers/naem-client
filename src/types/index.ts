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
};
