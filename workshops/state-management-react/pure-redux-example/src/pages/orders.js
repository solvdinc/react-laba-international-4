import Orders from '@/containers/Orders';
import MainLayout from '@/layout/MainLayout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function ProjectsPage() {
	return (
		<MainLayout>
			<Orders />
		</MainLayout>
	);
}
