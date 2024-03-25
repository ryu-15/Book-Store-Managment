"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newBook = exports.salesFilePath = exports.bookFilePath = void 0;
const PATH = "src/stores";
const salesFilePath = `${PATH}/bookSales.json`;
exports.salesFilePath = salesFilePath;
const bookFilePath = `${PATH}/bookData.json`;
exports.bookFilePath = bookFilePath;
const newBook = {
    bookName: "C++ Book",
    bookQty: 29,
    bookPrice: 415,
    bookCategory: "Programming"
};
exports.newBook = newBook;
