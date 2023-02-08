import http from 'http';
import fs from 'fs';
import path from 'path';
import app from './app';

import { getProducts } from './scripts';

import ServerGlobal from './server-global';

const port = process.env.PORT;

app.set('port', port);

const server = http.createServer(app);

const filePath = path.join(__dirname, 'data', 'data.json');

// Check if data file exist
if (!fs.existsSync(filePath)) {
	getProducts();

	ServerGlobal.getInstance().logger.info('Successfully got data');
}

server.listen(port);

ServerGlobal.getInstance().logger.info(`Server is running on port ${port}`);
