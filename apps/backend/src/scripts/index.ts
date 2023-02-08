import https from 'https';
import fs from 'fs-extra';
import path from 'path';
import xml2js from 'xml2js';

import ServerGlobal from '../server-global';

export const getProducts = () => {
	const parser = new xml2js.Parser();

	parser.on('error', (error) => {
		ServerGlobal.getInstance().logger.error(`<getProducts>: Parser error ${error}`);
	});

	https.get(process.env.DATA_URL, (res) => {
		let data = '';

		if (res.statusCode! === 200) {
			res.on('data', (resData) => {
				data += resData.toString();
			});

			res.on('end', () => {
				parser.parseString(data, async (error, result) => {
					if (error) throw error;

					const filePath = path.join(__dirname, '..', 'data', 'data.json');
					const dataJson = JSON.stringify(result, null, 4);

					await fs.outputFile(filePath, dataJson);
				});
			});
		}
	});

	ServerGlobal.getInstance().logger.info('<getProducts>: Successfully got products');
};
