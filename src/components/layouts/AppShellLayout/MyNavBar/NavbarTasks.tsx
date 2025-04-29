import { useEffect, useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { taskService } from '@/api/task';
import { TaskButton } from '@/components/buttons/TaskButton';
import { Task, TaskStatus } from '@/types/task.types';

export function NavbarTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await taskService.getAllTasks();
        setTasks(response as unknown as Task[]);
        setError(null);
      } catch (err) {
        setError('Error Loading the tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleStatusChange = async (taskId: string, newStatus: TaskStatus) => {
    try {
      setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)));
    } catch (err) {
      console.error('Error Updating Task:', err);
    }
  };

  if (loading) {
    return <Text>Loading Tasks...</Text>;
  }

  if (error) {
    return <Text c="red">{error}</Text>;
  }

  return (
    <Stack>
      {tasks.length === 0 ? (
        <Text>There is not available tasks</Text>
      ) : (
        tasks.map((task) => (
          <TaskButton key={task.id} task={task} onStatusChange={handleStatusChange} />
        ))
      )}
    </Stack>
  );
}
