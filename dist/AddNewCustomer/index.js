"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const writeObjectFrom_1 = __importDefault(require("../utils/writeObjectFrom"));
const constants_1 = require("../constants");
const readline_sync_1 = __importDefault(require("readline-sync"));
let newCustomerObj = {};
function writeNewCustomer(total) {
    const newCustomerName = readline_sync_1.default.question("Enter the customer name");
    newCustomerObj.customerName = newCustomerName;
    const customerContactString = readline_sync_1.default.question("Enter the customer contact");
    newCustomerObj.customerContact = parseInt(customerContactString);
    newCustomerObj.totalBalance = total;
    newCustomerObj.purchaseDate = new Date();
    const books = (0, writeObjectFrom_1.default)(constants_1.salesFilePath, newCustomerObj);
    console.log("the customer is added");
}
exports.default = writeNewCustomer;
