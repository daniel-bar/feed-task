import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from '@/layout/Nav';

import AppRouter from './App.router';

interface IProps {}

const AppView: React.FC<IProps> = () => (
	<BrowserRouter>
		<Suspense fallback={null}>
			<Nav />
			<AppRouter />
		</Suspense>
	</BrowserRouter>
);

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
