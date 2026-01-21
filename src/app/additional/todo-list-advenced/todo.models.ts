export interface ITodo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  deadline: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  category?: string;
}

export interface ICategory {
  id: number;
  name: string;
  color?: string;
}

export interface ITodoStats {
  total: number;
  completed: number;
  remaining: number;
  byCategory: Record<string, number>;
  byPriority: Record<'low' | 'medium' | 'high', number>;
}
