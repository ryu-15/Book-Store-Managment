import {salesFilePath} from "../constants";
import CustomerSalesInterface from "../models/CustomerSales";
import readObjectListFrom from "../utils/readObjectFrom";
function readSalesFile() {
    let sales: CustomerSalesInterface[] = [];
    readObjectListFrom<CustomerSalesInterface>(salesFilePath)
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
        })
}
export default readSalesFile;
