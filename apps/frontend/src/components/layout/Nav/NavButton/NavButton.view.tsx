import React from 'react';

import type icons from '@/assets/icons';

import Svg from '../../../ui/Svg';

import classes from './NavButton.module.scss';

interface IProps {
	readonly iconName: keyof typeof icons;
	readonly buttonName: string;
	readonly isSelected?: boolean;
}

const NavButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	if (props.isSelected) {
		return (
			<button className={classes['button--selected']} type="button">
				<Svg name={props.iconName} className={classes['button--selected__icon']} />
				<div className={classes['button--selected__text']}>{props.buttonName}</div>
			</button>
		);
	}

	return (
		<button className={classes['button']} type="button">
			<Svg name={props.iconName} className={classes['button__icon']} />
			<div className={classes['button__text']}>{props.buttonName}</div>
		</button>
	);
};

NavButtonView.displayName = 'NavButtonView';
NavButtonView.defaultProps = {};

export default React.memo(NavButtonView);
