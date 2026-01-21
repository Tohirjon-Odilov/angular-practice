export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  deadline: Date;
  prioritet: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
}
