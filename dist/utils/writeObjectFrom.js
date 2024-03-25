"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const writeObjectInto = (path, obj) => {
    fs_1.default.readFile(path, 'utf8', (error, data) => {
        if (error) {
            throw new Error("Error while writing file");
        }
        const jsonArray = JSON.parse(data);
        jsonArray.push(obj);
        const newData = JSON.stringify(jsonArray);
        fs_1.default.writeFile(path, newData, 'utf8', (error) => {
            if (error) {
                throw new Error("Error while writing file");
            }
        });
    });
};
exports.default = writeObjectInto;
