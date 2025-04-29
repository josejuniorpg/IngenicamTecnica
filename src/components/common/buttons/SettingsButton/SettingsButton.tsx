'use client';

import { useState } from 'react';
import {
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';
import { Menu, Text, UnstyledButton } from '@mantine/core';
import classes from './SettingsButton.module.css';

export function SettingsButton() {
  const [opened, setOpened] = useState(false);
  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <UnstyledButton aria-label="Open Menu" h={24}>
          <div className={classes.iconWrapper}>
            <IconSettings
                className={`${classes.rotatingIcon} ${opened ? classes.rotated : ''}`}
            />
          </div>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>Sync List</Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
