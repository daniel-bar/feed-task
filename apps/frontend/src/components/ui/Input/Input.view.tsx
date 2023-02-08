import React from 'react';

import { concatDiverseClasses } from '@/utils/component';
import type icons from '@/assets/icons';

import Svg from '../Svg';

import classes from './Input.module.scss';

interface IProps {
	readonly className?: string;
	readonly type?: 'text' | 'number';
	readonly value: string | number | null;
	readonly maxLength?: number;
	readonly placeholder?: string;
	readonly iconName?: keyof typeof icons;
	readonly onChange: (_: string) => void;
}

const InputView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	if (!props.iconName) {
		return (
			<div className={concatDiverseClasses(classes['container'], props.className)}>
				<input
					className={classes['container__input']}
					type={props.type ?? 'text'}
					value={props.value ?? ''}
					maxLength={props.maxLength}
					placeholder={props.placeholder}
					onChange={({ currentTarget: { value } }) => props.onChange(value)}
				/>
			</div>
		);
	}

	return (
		<div className={concatDiverseClasses(classes['inputIconContainer'], props.className)}>
			<Svg className={classes['inputIconContainer__icon']} name={props.iconName} />

			<input
				className={classes['inputIconContainer__input']}
				type={props.type ?? 'text'}
				value={props.value ?? ''}
				maxLength={props.maxLength}
				placeholder={props.placeholder}
				onChange={({ currentTarget: { value } }) => props.onChange(value)}
			/>
		</div>
	);
};

InputView.displayName = 'InputView';
InputView.defaultProps = {};

export default React.memo(InputView);
