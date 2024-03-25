import {bookFilePath} from "../constants";
import BookInterface from "../models/Book";
import readObjectListFrom from "../utils/readObjectFrom";
import mainMenu from "../main";
import writeNewCustomer from "../AddNewCustomer";
import readline from "readline-sync";
import writeObjectInto from "../utils/writeObjectFrom";
let total: number = 0;
let  bookObj: BookInterface = {} as BookInterface;
function readBookFile() {
    let books: BookInterface[] = [];
    readObjectListFrom<BookInterface>(bookFilePath)
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
            const reply = readline.question("Do you want to buy book(Y/N)?")
            if (reply.toUpperCase() === "N") {
                mainMenu();
            } else if (reply.toUpperCase() === "Y") {
                const input = readline.question("Enter the book ID of the book you want to buy")
                let id = parseInt(input);
                console.log(id);
                if (id > books.length) {
                    console.log("invalid id");
                    mainMenu();
                } else {
                    id -= 1;
                    const input = readline.question("Enter the quantity of the book you want to buy")
                    const qty = parseInt(input);
                    console.log(qty);
                    console.log(books[id].bookQty)
                    console.log(books[id].bookPrice)
                    if (qty > books[id].bookQty) {
                        console.log("Insufficient book qty");
                        mainMenu();
                    } else if (qty < books[id].bookQty) {
                        books[id].bookQty -= qty;
                        total = (books[id].bookPrice * qty);
                        writeNewCustomer(total);
                        writeObjectInto(bookFilePath, JSON.stringify(books));
                    } else if (qty == books[id].bookQty) {
                        total = (books[id].bookPrice * qty);
                        books.splice(id, 1);
                        writeNewCustomer(total);
                    }
                }
            }
        })
}
export default readBookFile;
