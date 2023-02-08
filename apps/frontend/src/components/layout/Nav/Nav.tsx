import React from 'react';

import NavView from './Nav.view';

interface IProps {}

const Nav: React.FC<IProps> = () => {
	const onInputChange = (value: string) => value;

	return <NavView onInputChange={onInputChange} />;
};

Nav.displayName = 'Nav';
Nav.defaultProps = {};

export default React.memo(Nav);
