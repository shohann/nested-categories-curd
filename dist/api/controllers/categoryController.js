"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = exports.getCategory = exports.setCategory = void 0;
const categoryService_1 = require("../services/categoryService");
const setCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, parentId } = req.body;
        if (!parentId) {
            const newRootCategory = yield (0, categoryService_1.createRootCategory)(name);
            return res.status(201).json({
                success: true,
                message: `Root category created by id ${newRootCategory.id}`
            });
        }
        const newChildCategory = yield (0, categoryService_1.createChildCategory)(name, parentId);
        res.status(201).json({
            success: true,
            message: `Child category created by id ${newChildCategory.id}`
        });
    }
    catch (error) {
        // duplicate error code
        console.log(error);
        res.send(error);
    }
});
exports.setCategory = setCategory;
const getCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const category = yield (0, categoryService_1.fetchCategory)(categoryId);
        res.status(200).json({
            success: true,
            message: category
        });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
exports.getCategory = getCategory;
const getCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, categoryService_1.fetchCategories)();
        res.status(200).json({
            success: true,
            message: categories
        });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
exports.getCategories = getCategories;
