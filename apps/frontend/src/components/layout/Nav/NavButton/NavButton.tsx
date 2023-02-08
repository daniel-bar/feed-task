import React from 'react';

import type icons from '@/assets/icons';

import NavButtonView from './NavButton.view';

interface IProps {
	readonly iconName: keyof typeof icons;
	readonly buttonName: string;
	readonly isSelected?: boolean;
}

const NavButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<NavButtonView
			iconName={props.iconName}
			buttonName={props.buttonName}
			isSelected={props.isSelected}
		/>
	);
};

NavButton.displayName = 'NavButton';
NavButton.defaultProps = {};

export default React.memo(NavButton);
