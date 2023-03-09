"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appConfigs_1 = require("./api/utils/appConfigs");
const categoryRoutes_1 = __importDefault(require("./api/routes/categoryRoutes"));
const port = (0, appConfigs_1.getPort)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/categories', categoryRoutes_1.default);
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
