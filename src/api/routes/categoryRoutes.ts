import express from 'express';
import { getCategories, 
         setCategory, 
         getCategory 
       } from '../controllers/categoryController';

const router = express.Router();

router.route('/')
      .get(getCategories)
      .post(setCategory)

router.route('/:categoryId')
      .get(getCategory)

export default router;