import React from 'react';
import { Title, Text } from '@mantine/core';
import classes from './Logo.module.css';

type LogoProp = {
	size: number;
};

export const Logo = ({ size }: LogoProp) => {
	return (
		<Title className={classes.title} style={{ fontSize: size }} ta="center">
			Contract.{''}
			<Text
				inherit
				variant="gradient"
				component="span"
				pr={5}
				gradient={{ from: 'blue', to: 'white' }}
			>
				io
			</Text>
		</Title>
	);
};
