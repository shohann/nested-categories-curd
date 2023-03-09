import express, { NextFunction, Request, Response } from 'express';

const port: number  = 3001;
const app = express();


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});