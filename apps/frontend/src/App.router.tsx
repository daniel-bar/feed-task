import React from 'react';
import { Routes, Route } from 'react-router-dom';

interface IProps {}

const Home = React.lazy(() => import('./pages/Home'));

const AppRouter: React.FC<IProps> = () => (
	<Routes>
		<Route path="" element={<Home />} />
	</Routes>
);

AppRouter.displayName = 'AppRouter';
AppRouter.defaultProps = {};

export default React.memo(AppRouter);
