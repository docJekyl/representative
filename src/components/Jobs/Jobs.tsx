import { Title, Text, Anchor } from '@mantine/core';
import classes from './Jobs.module.css';

export function Jobs() {
	return (
		<>
			<Title className={classes.title} ta="center" mt={100}>
				<Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
					Jobs
				</Text>
			</Title>
		</>
	);
}
