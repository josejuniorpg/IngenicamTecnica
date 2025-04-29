'use client';

import { useState } from 'react';
import { Box, Button, Group, Modal, Select, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { taskService } from '@/api/task';
import { CreateTaskDto } from '@/dto/task';

export function CreateTaskButton() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<CreateTaskDto>({
    initialValues: {
      title: '',
      description: '',
      status: 1,
    },
    validate: {
      title: (value) => (value.trim().length > 0 ? null : 'Title is required'),
    },
  });

  const handleSubmit = async (values: CreateTaskDto) => {
    setLoading(true);
    try {
      await taskService.createTask(values);
      form.reset();
      setOpened(false);
      window.location.reload();
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>Create New Task</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Create New Task">
        <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput required label="Title" {...form.getInputProps('title')} mb="md" />
          <Textarea label="Description" {...form.getInputProps('description')} mb="md" />
          <Select
            label="Status"
            data={[
              { value: '1', label: 'Todo' },
              { value: '2', label: 'In Progress' },
              { value: '3', label: 'Completed' },
            ]}
            {...form.getInputProps('status')}
            mb="xl"
          />
          <Group>
            <Button variant="outline" onClick={() => setOpened(false)} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" loading={loading}>
              Create
            </Button>
          </Group>
        </Box>
      </Modal>
    </>
  );
}
