import {bookFilePath, salesFilePath} from "../constants";
import BookInterface from "../models/Book";
import writeObjectInto from "../utils/writeObjectFrom";
import readline from "readline-sync";
import readObjectListFrom from "../utils/readObjectFrom";
import CustomerSalesInterface from "../models/CustomerSales";
let  bookObj: BookInterface = {} as BookInterface;
function getNewBookData() {
    const newBookName= readline.question("Enter the book name:")
    bookObj.bookName= newBookName;
    console.log(`Book name :${newBookName}`);
    const newBookPrice=readline.question("Enter the book price:")
    bookObj.bookPrice= parseFloat(newBookPrice);
    console.log(`Book price :${newBookPrice}`);
    const newBookQty=readline.question("Enter the book qty:")
    bookObj.bookQty = parseInt(newBookQty);
    console.log(`Book qty :${newBookQty}`);
    const newBookCategory= readline.question("Enter the book category:")
    bookObj.bookCategory=newBookCategory;
    console.log(`Book category :${newBookCategory}`);
}
function writeNewBook() {
    getNewBookData();
    readObjectListFrom<BookInterface>(bookFilePath)
        .then((currentData) => {
            currentData.push(bookObj)
            writeObjectInto(bookFilePath, JSON.stringify(currentData));
    console.log("the book is added")
});
}
export default writeNewBook;
