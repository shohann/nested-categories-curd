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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCategories = exports.fetchCategory = exports.createChildCategory = exports.createRootCategory = void 0;
const mainDBInit_1 = __importDefault(require("../loaders/mainDBInit"));
const createRootCategory = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield mainDBInit_1.default.category.create({
        data: {
            name: name
        }
    });
});
exports.createRootCategory = createRootCategory;
const createChildCategory = (name, parentId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield mainDBInit_1.default.category.create({
        data: {
            name: name,
            parentId: parentId
        }
    });
});
exports.createChildCategory = createChildCategory;
const fetchCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield mainDBInit_1.default.category.findUnique({
        where: {
            id: categoryId
        },
        include: {
            parent: true
        }
    });
});
exports.fetchCategory = fetchCategory;
const fetchCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield mainDBInit_1.default.category.findMany();
});
exports.fetchCategories = fetchCategories;
