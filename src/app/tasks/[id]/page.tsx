import { Flex, Stack, Text, Title } from '@mantine/core';
import { taskService } from '@/api/task';

export default async function TaskIDPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const data = await taskService.getStackByID(id.toString());
  return (
    <Flex align="center" justify="center">
      <Stack justify="center">
        <Title ta="center">{data.title}</Title>
        <Text ta="center">{data.description}</Text>
      </Stack>
    </Flex>
  );
}
