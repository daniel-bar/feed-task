import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';

import Svg from '@/ui/Svg';
import LikeButton from '@/ui/LikeButton';

import type { IProduct } from '@/interfaces/product';

import classes from './Feed.module.scss';
import { getLastSeen } from '@/utils/lastSeen';

interface IProps {
	readonly products: IProduct[];
	readonly hasMore: boolean;
	readonly onScrollPagination: () => void;
}

const FeedView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['container']}>
			<InfiniteScroll
				dataLength={props.products.length}
				next={props.onScrollPagination}
				hasMore={props.hasMore}
				endMessage={<h4>{t('feed.endMsg')}</h4>}
				loader={<h4>{t('feed.loader')}</h4>}
				style={{ overflow: 'none' }}
			>
				{props.products.map((item) => (
					<section key={item.id[0]} className={classes['post']}>
						<div className={classes['avatarDetailsWrapper']}>
							<img
								className={classes['avatarDetailsWrapper__img']}
								alt="avatar"
								src={item.avatar[0]}
							/>
							<div className={classes['details']}>
								<h2 className={classes['details__username']}>{item.username[0]}</h2>

								<div className={classes['shopName']}>
									<h2 className={classes['shopName__name']}>
										{item.shopName[0]!.length > 0 ? item.shopName[0] : 'No Shop name'}
									</h2>
									<Trans>&nbsp;</Trans>
									<Trans>&#183;</Trans>
									<Trans>&nbsp;</Trans>
									<h2 className={classes['shopName__date']}>{getLastSeen(item.date[0])}</h2>
								</div>
							</div>
						</div>
						<p className={classes['post__text']}>
							{item.text[0]!.length > 0 ? item.text[0] : 'No Text'}
						</p>
						<div className={classes['post__imagesWrapper']}>
							{item.images.slice(0, 2).map((img) => (
								<img key={img} className={classes['img']} alt="images" src={img} />
							))}
						</div>
						<div className={classes['postStats']}>
							<div className={classes['postStats__likes']}>
								<Svg className={classes['icon']} name="greenRoundedLike" />
								{item.likes[0] ?? 0}
								<Trans>&nbsp;</Trans>
								{t('feed.likes')}
							</div>
							<h2 className={classes['postStats__comments']}>
								{item.comments.length ?? 0}
								<Trans>&nbsp;</Trans>
								{t('feed.comments')}
							</h2>
						</div>
						<hr className={classes['post__divider']} />
						<div className={classes['post__actions']}>
							<LikeButton />
							<button type="button" className={classes['button']}>
								<Svg className={classes['button__icon']} name="comment" />
								<span className={classes['button__text']}>{t('feed.comment')}</span>
							</button>
						</div>
					</section>
				))}
			</InfiniteScroll>
		</section>
	);
};

FeedView.displayName = 'FeedView';
FeedView.defaultProps = {};

export default React.memo(FeedView);
