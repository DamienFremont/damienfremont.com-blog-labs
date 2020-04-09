import Router from 'express';
import bodyParser from 'body-parser';
import nocache from '../utils/nocache';
import status from './status';
import auth from './auth';

export default () => {
	console.log('Init API...');
	let api = Router();
	api.use(bodyParser.json());
	api.use(nocache());
	// perhaps expose some API metadata at the root
	api.use('/status', status());
	api.use('/auth', auth());
	api.use('/status/v1', status());
	api.use('/auth/v1', status());
	return api;
}