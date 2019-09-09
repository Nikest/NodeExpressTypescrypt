import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as createError from 'http-errors';
import * as path from 'path';

import { Request, Response, Next } from 'express';

import { mainRouter } from './routes';

const logger = require('morgan');

const expressServer = express();

expressServer.use(logger('dev'));
expressServer.use(express.json());
expressServer.use(express.urlencoded({ extended: false }));
expressServer.use(cookieParser());
expressServer.use(express.static('public'));

expressServer.use('/', mainRouter);

expressServer.use((req: Request, res: Response, next: Next) => {
    console.log('req');
    console.log(req.url);
    next(createError(404));
});

export { expressServer };
