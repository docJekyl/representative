import { render, screen } from '@test-utils';
import { Dashboard } from './Dashboard';

describe('Dashboard component', () => {
	it('has correct Vite guide link', () => {
		render(<Dashboard />);
		expect(screen.getByText('this guide')).toHaveAttribute(
			'href',
			'https://mantine.dev/guides/vite/',
		);
	});
});
