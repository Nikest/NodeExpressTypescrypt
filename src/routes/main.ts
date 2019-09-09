import { Request, Response, Next, Router } from 'express';
import * as path from 'path';

const mainRouter = Router();

mainRouter.get('/', (req: Request, res: Response) => {
    console.log(__dirname);
    res.sendFile('index.html', {root: './src/views/' });
});

export { mainRouter }
