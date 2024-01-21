import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { GlobalRoot } from './routes/GlobalRoot';

export default function App() {
	// ? authentication provider
	return (
		<MantineProvider theme={theme}>
			<GlobalRoot />
		</MantineProvider>
	);
}
