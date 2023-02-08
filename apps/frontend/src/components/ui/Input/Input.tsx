import React from 'react';

import type icons from '@/assets/icons';

import InputView from './Input.view';

interface IProps {
	readonly className?: string;
	readonly type?: 'text' | 'number';
	readonly value: string | number | null;
	readonly maxLength?: number;
	readonly placeholder?: string;
	readonly iconName?: keyof typeof icons;
	readonly onChange: (_: string) => void;
}

const Input: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<InputView
			className={props.className}
			type={props.type}
			value={props.value}
			maxLength={props.maxLength}
			placeholder={props.placeholder}
			iconName={props.iconName}
			onChange={props.onChange}
		/>
	);
};

Input.displayName = 'Input';
Input.defaultProps = {};

export default React.memo(Input);
