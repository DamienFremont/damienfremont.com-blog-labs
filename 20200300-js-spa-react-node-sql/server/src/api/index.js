import Router from 'express';
import bodyParser from 'body-parser';
import { nocache } from '../helpers/httpheader';
import auth from '../middlewares/auth';
import status from './status';

export default () => {
	console.log('[api] config...');
	let api = Router();
	api.use(bodyParser.json());
	api.use(nocache());
	// perhaps expose some API metadata at the root

	console.log('[api] private route /api/');
	api.use('/status', status());

	console.log('[api] public route /api/**/v1');
	api.use('/status/v1', status());
	return api;
}