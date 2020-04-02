import Router from 'express';
import bodyParser from 'body-parser';
import respCache from './utils/respCache';
import status from './status';

export default () => {
	console.log('Init API...');
	let api = Router();
	api.use(bodyParser.json());
	api.use(respCache.noStore());
	// perhaps expose some API metadata at the root
	api.use('/status', status());
	api.use('/status/v1', status());
	return api;
}