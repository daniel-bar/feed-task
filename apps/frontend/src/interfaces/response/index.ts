import type { IProduct } from '../product';
import type IServerResponseData from '../shared/response';

interface IProductsResponseData extends IServerResponseData {
	readonly data?: IProduct[];
}

export type { IProductsResponseData };
