'use client';
import LayoutSide from '@/components/Layout/LayoutSide';
import ReduxProvider from '@/providers/ReduxProvider';
import { SessionProvider } from '@/providers/SessionProvider';
import React, { FC, ReactNode } from 'react';

interface RootLayoutClientProps {
	children: ReactNode;
}

const RootLayoutClient: FC<RootLayoutClientProps> = ({ children }) => {
	return (
		<>
			<ReduxProvider>
				<LayoutSide>{children}</LayoutSide>
			</ReduxProvider>
		</>
	);
};

export default RootLayoutClient;
