import express from 'express';
import { setCategory,
         getCategory,
         getCategories
       } from '../controllers/categoryController';

const router = express.Router();

router.route('/')
      .post(setCategory)
      .get(getCategories)

router.route('/:categoryId')
      .get(getCategory)

export default router;