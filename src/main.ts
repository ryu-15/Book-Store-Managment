import readSalesFile from "./ReadSales";
import readBookFile from "./ReadBook";
import writeNewBook from "./AddNewBook";
import readline from "readline-sync";

function mainMenu() {
    console.log("1. Add Book");
    console.log("2. Book Sell");
    console.log("3. Sales History");
    console.log("4. Exit");
    const choice = readline.question("Enter your choice: ");
    const number = parseInt(choice);
    if (number === 1) {
        console.log("Adding book");
        writeNewBook();
    } else if (number === 2) {
        console.log("Loading book");
        readBookFile();
    } else if (number === 3) {
        console.log("Loading sales history");
        readSalesFile();
    } else if (number === 4) {
        console.log("Exiting the software");
    } else {
        console.log("Invalid input. Please enter a valid number.");
        mainMenu();
    }
}

mainMenu();
export default mainMenu;



