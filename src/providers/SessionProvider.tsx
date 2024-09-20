import { FC, ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useGetProductsQuery } from '@/redux/api/crud';

interface SessionProviderProps {
	children: ReactNode;
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
	const { status } = useGetProductsQuery();
	const pathname = usePathname();
	const router = useRouter();

	const handleNavigation = () => {
		switch (pathname) {
			case '/':
				break;
			case '/':
			// case '/profile':
				// if (status === 'rejected') {
				// 	router.push('/auth/sign-in');
				// }
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		handleNavigation();
	}, [status, pathname, router]);

	return children;
};
