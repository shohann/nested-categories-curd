import { NextFunction, Request, Response } from 'express';
import { createRootCategory,
         createChildCategory,
         fetchCategory,
         fetchCategories
       } from '../services/categoryService';

export const setCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, parentId } = req.body;
        
        if (!parentId) {
            const newRootCategory = await createRootCategory(name);

            return res.status(201).json({
                success: true,
                message: `Root category created by id ${newRootCategory.id}`
            });
        }
        
        const newChildCategory = await createChildCategory(name, parentId);

        res.status(201).json({
            success: true,
            message: `Child category created by id ${newChildCategory.id}`
        });
    } catch (error) {
        // duplicate error code
        console.log(error);
        res.send(error)
    }
};

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryId } = req.params;
        const category = await fetchCategory(categoryId);

        res.status(200).json({
            success: true,
            message: category
        });
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await fetchCategories()

        res.status(200).json({
            success: true,
            message: categories
        });
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};


