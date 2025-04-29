import { TaskStatus } from '@/types/task.types';

export interface CreateTaskDto {
  title: string;
  description: string;
  status: TaskStatus;
}

export interface UpdateTaskStatusDto {
  status: TaskStatus;
}
