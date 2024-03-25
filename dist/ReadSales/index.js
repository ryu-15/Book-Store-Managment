"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const readObjectFrom_1 = __importDefault(require("../utils/readObjectFrom"));
function readSalesFile() {
    let sales = [];
    (0, readObjectFrom_1.default)(constants_1.salesFilePath)
        .then((salesValue) => {
        sales = salesValue;
        if (!sales) {
            return;
        }
        sales.forEach((item, index) => {
            console.log(`Customer Number :${index + 1}`);
            console.log("Customer Name:", item.customerName);
            console.log("Customer Contact:", item.customerContact);
            console.log("Total Balance:", item.totalBalance);
            console.log("Purchase Date:", item.purchaseDate);
        });
        return sales;
    });
}
exports.default = readSalesFile;
