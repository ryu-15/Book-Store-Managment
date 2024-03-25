import writeObjectInto from "../utils/writeObjectFrom";
import {salesFilePath} from "../constants";
import CustomerSalesInterface from "../models/CustomerSales";
import readline from "readline-sync";
import readObjectListFrom from "../utils/readObjectFrom";
import BookInterface from "../models/Book";
import CustomerSales from "../models/CustomerSales";

let newCustomerObj: CustomerSalesInterface = {} as CustomerSalesInterface;

function writeNewCustomer(total: number) {
    newCustomerObj.customerName = readline.question("Enter the customer name");
    const customerContactString = readline.question("Enter the customer contact");
    newCustomerObj.customerContact = parseInt(customerContactString);
    newCustomerObj.totalBalance = total;
    newCustomerObj.purchaseDate = new Date();
    readObjectListFrom<CustomerSalesInterface>(salesFilePath)
        .then((currentData) => {
            currentData.push(newCustomerObj)
            writeObjectInto(salesFilePath, JSON.stringify(currentData));
            console.log("the customer is added");
        });

}

export default writeNewCustomer;
