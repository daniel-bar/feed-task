import React from 'react';

import Svg from '@/ui/Svg';
import Input from '@/ui/Input';

import NavButton from './NavButton';

import classes from './Nav.module.scss';

interface IProps {
	readonly onInputChange: (value: string) => string;
}

const NavView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<nav className={classes['container']}>
			<div className={classes['leftContainer']}>
				<Svg className={classes['leftContainer__logo']} name="tedoooLogo" />
				<Input
					value=""
					type="text"
					placeholder="Search"
					iconName="search"
					onChange={props.onInputChange}
				/>
			</div>
			<div className={classes['rightContainer']}>
				<NavButton buttonName="Home" iconName="home" isSelected />
				<NavButton buttonName="Messaging" iconName="comment" />
				<NavButton buttonName="Notifications" iconName="bell" />
				<img
					className={classes['container__img']}
					alt="avatar"
					src="https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg"
				/>
			</div>
		</nav>
	);
};

NavView.displayName = 'NavView';
NavView.defaultProps = {};

export default React.memo(NavView);
