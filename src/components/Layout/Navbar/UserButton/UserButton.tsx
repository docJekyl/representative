import { UnstyledButton, Group, Avatar, Text, rem, Menu } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';

import {
	IconSettings,
	IconSearch,
	IconPhoto,
	IconMessageCircle,
	IconTrash,
	IconArrowsLeftRight,
} from '@tabler/icons-react';

export function UserButton() {
	return (
		<Menu shadow="md" width={200}>
			<Menu.Target>
				<UnstyledButton className={classes.user}>
					<Group>
						<Avatar
							src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
							radius="xl"
						/>

						<div style={{ flex: 1 }}>
							<Text size="sm" fw={500}>
								Dan
							</Text>

							<Text c="dimmed" size="xs">
								dan@contract.io
							</Text>
						</div>

						<IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
					</Group>
				</UnstyledButton>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Application</Menu.Label>
				<Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
					Settings
				</Menu.Item>
				<Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
					Messages
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}
