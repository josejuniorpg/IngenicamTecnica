export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  PENDING = 1,
  COMPLETED = 2,
  IN_PROGRESS = 3,
}
