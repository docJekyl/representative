import { Group, Code, ScrollArea, rem, Button } from '@mantine/core';
import {
	IconNotes,
	IconCalendarStats,
	IconGauge,
	IconPresentationAnalytics,
	IconFileAnalytics,
	IconAdjustments,
	IconLock,
} from '@tabler/icons-react';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import classes from './Navbar.module.css';
import { Logo } from '../../Logo/Logo';
import { UserButton } from './UserButton/UserButton';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

const navigationLinks = [
	{ label: 'Dashboard', icon: IconGauge, link: '/dashboard' },
	{ label: 'Jobs', icon: IconPresentationAnalytics, link: '/jobs' },
	// { label: 'Contracts', icon: IconFileAnalytics, link: '/contracts' },
	// {
	// 	label: 'Contracts',
	// 	icon: IconFileAnalytics,
	// 	links: [{ label: 'Open Contracts', link: '/contracts-open' }],
	// },
];

export function Navbar() {
	const links = navigationLinks.map((item) => <LinksGroup {...item} key={item.label} />);

	return (
		<nav className={classes.navbar}>
			<div className={classes.header}>
				<Group justify="space-between">
					<Logo size={30} />
					<Code fw={700}>v0.0.0</Code>
				</Group>
			</div>

			<ScrollArea className={classes.links}>
				<div className={classes.linksInner}>{links}</div>
			</ScrollArea>

			<div className={classes.footerGroup}>
				<ColorSchemeToggle position="left" />
				<div className={classes.footer}>
					<UserButton />
				</div>
			</div>
		</nav>
	);
}
