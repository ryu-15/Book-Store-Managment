"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const readObjectFrom_1 = __importDefault(require("../utils/readObjectFrom"));
const main_1 = __importDefault(require("../main"));
const AddNewCustomer_1 = __importDefault(require("../AddNewCustomer"));
const readline_sync_1 = __importDefault(require("readline-sync"));
let total;
function readBookFile() {
    let books = [];
    (0, readObjectFrom_1.default)(constants_1.bookFilePath)
        .then((_) => {
        books = _;
        if (!books) {
            return;
        }
        books.forEach((item, index) => {
            console.log(`Book ID :${index + 1}`);
            console.log("Name:", item.bookName);
            console.log("Price:", item.bookPrice);
            console.log("Category:", item.bookCategory);
            console.log("Quantity:", item.bookQty);
        });
        return books;
    })
        .then(() => {
        const reply = readline_sync_1.default.question("Do you want to buy book(Y/N)?");
        if (reply.toUpperCase() === "N") {
            (0, main_1.default)();
        }
        else if (reply.toUpperCase() === "Y") {
            console.log("yes yes ");
            const input = readline_sync_1.default.question("Enter the book ID of the book you want to buy");
            const id = parseInt(input);
            if (id > books.length) {
                console.log("invalid id");
                (0, main_1.default)();
            }
            else {
                const input = readline_sync_1.default.question("Enter the quantity of the book you want to buy");
                const qty = parseInt(input);
                if (qty > books[id].bookQty) {
                    console.log("Insufficient book qty");
                    (0, main_1.default)();
                }
                else if (qty < books[id].bookQty) {
                    books[id].bookQty = books[id].bookQty - qty;
                    total = (books[id].bookPrice * qty);
                    (0, AddNewCustomer_1.default)(total);
                }
                else if (qty === books[id].bookQty) {
                    total = (books[id].bookPrice * qty);
                    books.splice(id, 1);
                    (0, AddNewCustomer_1.default)(total);
                }
            }
        }
    });
}
exports.default = readBookFile;
