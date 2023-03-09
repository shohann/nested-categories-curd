import { NextFunction, Request, Response } from 'express';
import { createCategory,
         fetchCategories,
         fetchCategory,
         fetchCategoryParent
       } from '../services/categoryService';

export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await fetchCategories();
        res.send(categories)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};

export const setCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, parentCategory } = req.body;
        const category = await createCategory(name, parentCategory);
        
        res.send(category);
    } catch (error) {
        // duplicate "code": "P2002",
        console.log(error);
        res.send(error)
    }
};

export const getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryId } = req.params;
        const category = await fetchCategory(categoryId);
        let parent;

        if (category && category.parentCategory !== 'root') {
            parent = await fetchCategoryParent(category.parentCategory);
            return res.send({
                category,
                parent
            })
        } else {
            // not found error
        }

        
        
        res.send({
            category,
            // parentCategory
        });
    } catch (error) {
        // not found
        console.log(error);
        res.send(error)
    }
};