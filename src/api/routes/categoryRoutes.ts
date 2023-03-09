import express from 'express';
import { getCategories, setCategory } from '../controllers/categoryController';

const router = express.Router();

router.route('/')
      .get(getCategories)
      .post(setCategory)

export default router;