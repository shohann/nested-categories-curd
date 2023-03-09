"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPort = void 0;
process.env["NODE_CONFIG_DIR"] = './src/config';
const config_1 = __importDefault(require("config"));
const getPort = () => config_1.default.get('port');
exports.getPort = getPort;
