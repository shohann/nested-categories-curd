import express, { NextFunction, Request, Response } from 'express';

const port: number  = 3001;
const app = express();

import config from 'config';

console.log(config.get<number>('port'));



app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});