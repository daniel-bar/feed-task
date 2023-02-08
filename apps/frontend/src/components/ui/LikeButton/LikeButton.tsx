import React, { useState } from 'react';

import LikeButtonView from './LikeButton.view';

interface IProps {}

const LikeButton: React.FC<IProps> = () => {
	const [isLikedState, setIsLikedState] = useState<boolean>(false);

	const onClick = () => setIsLikedState((prevState) => !prevState);

	return <LikeButtonView isLiked={isLikedState} onClick={onClick} />;
};

LikeButton.displayName = 'LikeButton';
LikeButton.defaultProps = {};

export default React.memo(LikeButton);
