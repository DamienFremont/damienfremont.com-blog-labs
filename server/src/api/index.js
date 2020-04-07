import Router from 'express';
import bodyParser from 'body-parser';
import { cacheControl } from '../utils/header';
import StatusApi from './StatusApi';

export default () => {
	console.log('Init API...');
	let api = Router();
	api.use(bodyParser.json());
	api.use(cacheControl.noStore());
	// perhaps expose some API metadata at the root
	api.use('/status', StatusApi());
	api.use('/status/v1', StatusApi());
	return api;
}