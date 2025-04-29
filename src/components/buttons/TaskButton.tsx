// components/TaskButton.tsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, ComboboxItem, Group, Select } from '@mantine/core';
import { Task, TaskStatus } from '@/types/task.types';

interface TaskButtonProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
}

export function TaskButton({ task, onStatusChange }: TaskButtonProps) {
  const router = useRouter();
  const [status, setStatus] = useState<TaskStatus>(task.status);

  const statusOptions = [
    { value: TaskStatus.PENDING.toString(), label: 'Pending' },
    { value: TaskStatus.COMPLETED.toString(), label: 'Completed' },
    { value: TaskStatus.IN_PROGRESS.toString(), label: 'In progress' },
  ];

  const handleButtonClick = () => {
    router.push(`/tasks/${task.id}`);
  };

  const handleStatusChange = (value: string | null, option: ComboboxItem) => {
    if (value) {
      const newStatus = parseInt(value, 10) as TaskStatus;
      setStatus(newStatus);
      onStatusChange(task.id, newStatus);
    }
  };

  return (
    <Group style={{ width: '100%' }}>
      <Button
        variant="subtle"
        fullWidth
        onClick={handleButtonClick}
        style={{
          justifyContent: 'flex-start',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          paddingRight: '100px',
        }}
      >
        {task.title}
      </Button>

      <Box
        style={{
          position: 'absolute',
          right: 5,
          pointerEvents: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Select
          value={status.toString()}
          onChange={handleStatusChange}
          data={statusOptions}
          size="xs"
          w={120}
        />
      </Box>
    </Group>
  );
}
