"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const writeObjectFrom_1 = __importDefault(require("../utils/writeObjectFrom"));
const readline_sync_1 = __importDefault(require("readline-sync"));
let bookObj = {};
function getNewBookData() {
    const newBookName = readline_sync_1.default.question("Enter the book name:");
    bookObj.bookName = newBookName;
    console.log(`Book name :${newBookName}`);
    const newBookPrice = readline_sync_1.default.question("Enter the book price:");
    bookObj.bookPrice = parseFloat(newBookPrice);
    console.log(`Book price :${newBookPrice}`);
    const newBookQty = readline_sync_1.default.question("Enter the book qty:");
    bookObj.bookQty = parseInt(newBookQty);
    console.log(`Book qty :${newBookQty}`);
    const newBookCategory = readline_sync_1.default.question("Enter the book category:");
    bookObj.bookCategory = newBookCategory;
    console.log(`Book category :${newBookCategory}`);
}
function writeNewBook() {
    getNewBookData();
    const books = (0, writeObjectFrom_1.default)(constants_1.bookFilePath, bookObj);
    console.log("the book is added");
}
exports.default = writeNewBook;
