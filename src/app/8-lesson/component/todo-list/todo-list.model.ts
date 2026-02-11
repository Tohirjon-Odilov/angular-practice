export interface TodoModel {
  name: string;
  description: string;
  date: Date;
  state: State;
}

export enum State {
  Waiting = 1,
  InProgress = 2,
  Completed = 3,
  Reset = 4
}
