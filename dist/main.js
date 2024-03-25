"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReadSales_1 = __importDefault(require("./ReadSales"));
const ReadBook_1 = __importDefault(require("./ReadBook"));
const AddNewBook_1 = __importDefault(require("./AddNewBook"));
const readline_sync_1 = __importDefault(require("readline-sync"));
function mainMenu() {
    console.log("1. Add Book");
    console.log("2. Book Sell");
    console.log("3. Sales History");
    console.log("4. Exit");
    const choice = readline_sync_1.default.question("Enter your choice: ", {
        hideEchoBack: true
    });
    const number = parseInt(choice);
    if (number === 1) {
        console.log("Adding book");
        (0, AddNewBook_1.default)();
    }
    else if (number === 2) {
        console.log("Loading book");
        (0, ReadBook_1.default)();
    }
    else if (number === 3) {
        console.log("Loading sales history");
        (0, ReadSales_1.default)();
    }
    else if (number === 4) {
        console.log("Exiting the software");
    }
    else {
        console.log("Invalid input. Please enter a valid number.");
        mainMenu();
    }
}
mainMenu();
exports.default = mainMenu;
