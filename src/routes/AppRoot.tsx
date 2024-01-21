import { Layout } from '@/components/Layout/Layout';
import { DashboardPage } from '@/pages/Dashboard.page';
import { JobsPage } from '@/pages/Jobs.page';
import { Route, Routes } from 'react-router-dom';

export const AppRoot = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<DashboardPage />} />
					<Route path="jobs" element={<JobsPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
				</Route>
			</Routes>
		</>
	);
};
