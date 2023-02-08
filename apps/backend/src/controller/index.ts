import fs from 'fs';
import path from 'path';

import ServerGlobal from '../server-global';
import { paginate } from '../utils';

import type { IProducts } from '../model';
import type { IGetProductsRequest } from '../model/express/request';
import type { IGetProductsResponse } from '../model/express/response';

const getProducts = async (req: IGetProductsRequest, res: IGetProductsResponse) => {
	const page = Number(req.query.page);
	const filePath = path.join(__dirname, '..', 'data', 'data.json');

	ServerGlobal.getInstance().logger.info('<getProducts>: Start processing request');

	try {
		// Reads file
		const jsonData = await fs.promises.readFile(filePath, 'utf8');

		// Converting file to array
		const arrayData: IProducts = JSON.parse(jsonData);

		return res.status(200).send({
			success: true,
			message: 'Successfully got products',
			data: paginate(arrayData.result.Data, page ? page : 1),
		});
	} catch (e) {
		ServerGlobal.getInstance().logger.error(
			`<getProducts>: Failed to get products because of server error: ${e}`,
		);

		return res.status(500).send({
			success: false,
			message: 'Server error',
		});
	}
};

export { getProducts };
