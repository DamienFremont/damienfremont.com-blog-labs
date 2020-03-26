import bodyParser from 'body-parser';
import Router from 'express';
import respCache from '../utils/respCache';
import statusApi from './statusApi';

export default () => {
	let api = Router();

	api.use(bodyParser.json());
	api.use(respCache.noStore());

	// perhaps expose some API metadata at the root
	api.use('/status', statusApi());

	return api;
}