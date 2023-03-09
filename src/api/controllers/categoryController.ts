import { NextFunction, Request, Response } from 'express';

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        res.send('Works')
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};

export const setCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        res.send('Works')
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};