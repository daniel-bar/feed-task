import express from 'express';
import { IProducts } from 'src/model';

import { IServerResponse } from '../../shared/response';

type IGetProductsResponse = express.Response<
	IServerResponse & {
		readonly data?: {
			readonly id: string[];
			readonly userId: string[];
			readonly username: string[];
			readonly avatar: string[];
			readonly shopName: string[];
			readonly shopId: string[];
			readonly images: string[];
			readonly comments: string[];
			readonly date: string[];
			readonly text: string[];
			readonly likes: string[];
			readonly didLike: string[];
			readonly premium: string[];
		}[];
	}
>;

export type { IGetProductsResponse };
