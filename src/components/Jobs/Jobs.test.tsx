import { render, screen } from '@test-utils';
import { Jobs } from './Jobs';

describe('Jobs component', () => {
	it('has correct Vite guide link', () => {
		render(<Jobs />);
		expect(screen.getByText('this guide')).toHaveAttribute(
			'href',
			'https://mantine.dev/guides/vite/',
		);
	});
});
