import { NextFunction, Request, Response } from 'express';
import { createCategory } from '../services/categoryService';

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
        const { name } = req.body;

        const category = await createCategory(name);
        
        res.send(category);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};