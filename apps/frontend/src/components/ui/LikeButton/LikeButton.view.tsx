import React from 'react';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';

import Svg from '../Svg';

import classes from './LikeButton.module.scss';

interface IProps {
	readonly isLiked: boolean;
	readonly onClick: () => void;
}

const LikeButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const isLikedIconStyle = props.isLiked
		? concatClasses(classes, 'button__icon', 'button__likeIcon--selected')
		: classes['button__icon'];

	const isLikedTextStyle = props.isLiked
		? concatClasses(classes, 'button__text', 'button__likeText--selected')
		: classes['button__text'];

	return (
		<button type="button" className={classes['button']} onClick={() => props.onClick()}>
			<Svg className={isLikedIconStyle} name="like" />
			<span className={isLikedTextStyle}>{t('feed.like')}</span>
		</button>
	);
};

LikeButtonView.displayName = 'LikeButtonView';
LikeButtonView.defaultProps = {};

export default React.memo(LikeButtonView);
