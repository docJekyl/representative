import { ActionIcon, Button, Group, useMantineColorScheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

type ColorSchemeToggle = {
	position: 'left' | 'right' | 'center' | undefined;
};

export function ColorSchemeToggle({ position = 'left' }: ColorSchemeToggle) {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const navigate = useNavigate();

	return (
		<Group justify={position} mb="sm">
			<ActionIcon variant="light">
				{colorScheme === 'light' ? (
					<IconMoonStars onClick={() => toggleColorScheme()} />
				) : (
					<IconSun onClick={() => toggleColorScheme()} />
				)}
			</ActionIcon>
		</Group>
	);
}
