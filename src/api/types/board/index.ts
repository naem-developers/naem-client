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
