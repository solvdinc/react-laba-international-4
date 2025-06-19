import Home from '@/containers/Home';
import MainLayout from '@/layout/MainLayout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return (
		<MainLayout>
			<Home />
		</MainLayout>
	);
}
