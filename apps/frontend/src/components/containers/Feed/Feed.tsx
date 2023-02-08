import React, { useEffect, useState } from 'react';

import { backendApi } from '@/utils/http';

import type { IProduct } from '@/interfaces/product';
import type { IProductsResponseData } from '@/interfaces/response';

import FeedView from './Feed.view';

interface IProps {}

const Feed: React.FC<IProps> = () => {
	const [productsState, setProductsState] = useState<IProduct[]>([]);
	const [pageState, setPageState] = useState<number>(1);
	const [hasMoreState, setHasMoreState] = useState<boolean>(true);

	const onScrollPagination = () => {
		setPageState((prevState) => prevState + 1);

		backendApi.get<IProductsResponseData>(`?page=${pageState}`).then((response) => {
			setProductsState((prevState) => [...prevState, ...response.data.data!]);

			setHasMoreState(() => {
				if (response.data.data!.length === 0) {
					return false;
				}

				return true;
			});
		});
	};

	useEffect(() => {
		onScrollPagination();
	}, []);

	return (
		<FeedView products={productsState} hasMore={hasMoreState} onScrollPagination={onScrollPagination} />
	);
};

Feed.displayName = 'Feed';
Feed.defaultProps = {};

export default React.memo(Feed);
