import express from 'express';

interface IGetProductsRequest extends express.Request {
	readonly query: Readonly<{
		page: string;
	}>;
}

export type { IGetProductsRequest };
