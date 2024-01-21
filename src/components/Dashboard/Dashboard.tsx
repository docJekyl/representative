import { Title, Text, Anchor } from '@mantine/core';
import classes from './Dashboard.module.css';

export function Dashboard() {
	return (
		<>
			<Title className={classes.title} ta="center" mt={100}>
				<Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
					Dashboard
				</Text>
			</Title>
			<Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
				This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
				Vite integration follow{' '}
				<Anchor href="https://mantine.dev/guides/vite/" size="lg">
					this guide
				</Anchor>
				. To get started edit pages/Dashboard.page.tsx file.
			</Text>
		</>
	);
}
