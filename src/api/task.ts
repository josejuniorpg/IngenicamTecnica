import { CreateTaskDto, UpdateTaskStatusDto } from '@/dto/task';
import { apiService } from '@/lib/api/service';
import { Task } from '@/types/task.types';

const TASKS_ENDPOINT = 'api/tasks';

export const taskService = {
  getStackByID: async (id: string) => {
    const response = await apiService.getById<Task>(`${TASKS_ENDPOINT}/${id}`);
    return response.data;
  },

  getAllTasks: async () => {
    const response = await apiService.getAll<Task[]>(TASKS_ENDPOINT);
    return response.data;
  },

  createTask: async (taskData: CreateTaskDto) => {
    const response = await apiService.create<Task, CreateTaskDto>(TASKS_ENDPOINT, taskData);
    return response.data;
  },

  updateTaskStatus: async (id: string, statusData: UpdateTaskStatusDto) => {
    const response = await apiService.patch(`${TASKS_ENDPOINT}/${id}/status`, statusData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },

  updateTask: async (id: string, taskData: Partial<CreateTaskDto>) => {
    const response = await apiService.update<Task, Partial<CreateTaskDto>>(
      TASKS_ENDPOINT,
      id,
      taskData
    );
    return response.data;
  },

  deleteTask: async (id: string) => {
    const response = await apiService.remove<Task>(TASKS_ENDPOINT, id);
    return response.data;
  },
};
