import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Card, Center, Container } from '@mantine/core';
import { Logo } from '@/components/Logo/Logo';
import { AppRoot } from './AppRoot';
import { Database } from './database.types';

const supabase = createClient<Database>(
	import.meta.env.VITE_SUPABASE_URL || '',
	import.meta.env.VITE_SUPABASE_ANON_KEY,
);

type Auth = {};

export const GlobalRoot = () => {
	const [session, setSession] = useState<Auth | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => subscription.unsubscribe();
	}, []);

	if (!session) {
		return (
			<>
				<div style={{ margin: '20px' }}></div>
				<Container pt={100} size={550} color="black">
					<Card withBorder shadow="md" radius="md" color="#F8F9FA">
						<Center>
							<div style={{ width: 400 }}>
								<Logo size={50} />
								<Auth
									supabaseClient={supabase}
									appearance={{
										theme: ThemeSupa,
										variables: {
											default: {
												colors: {
													brand: '#5C7CFA',
												},
											},
										},
									}}
									providers={[]}
								/>
							</div>
						</Center>
					</Card>
				</Container>
			</>
		);
	} else {
		return <AppRoot />;
	}
};
