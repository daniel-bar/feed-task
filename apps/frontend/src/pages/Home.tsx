import React from 'react';

import Feed from '@/containers/Feed';

interface IProps {}

const HomePage: React.FC<IProps> = () => {
	return <Feed />;
};

HomePage.displayName = 'HomePage';
HomePage.defaultProps = {};

export default HomePage;
