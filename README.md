# Book-Store-Management
This is a simple book management system in which it records the details about books available in a book store and details about their customer.

This system can also calculate the total cost and quantity of the book that the customer wants to buy .


### Open the terminal:

First, run the development server:

`npm run dev`

---


There you will get 4 option:

```
1. Add Book
2. Book Sell
3. Sales History
4. Exit
   Enter your choice:
   ```
---

- If you enter the choice as 1,

    Then you wil be asked the details about the book you want to add

    ```
    Enter the book name:computer science
    Enter the book price:200
    Enter the book qty:29
    Enter the book category:computer
    ```
    After, you have entered the details correctly like in the above example, we will have statement telling

    >The book is added

---
- If you enter the choice as 2,

    Then you will be provided with a list of book along with it details available in the book store 
 
```
Loading book 

Book ID :1
Name: DSA book
Price: 350
Category: maths
Quantity: 24

Book ID :2
Name:  VB.net book
Price: 480
Category: programming
Quantity: 65

Book ID :3
Name: MFCS book
Price: 450
Category: maths
Quantity: 6
Book ID :4

Do you want to buy book(Y/N)?
```
If we enter 'Y',
then we will enter the book id and its quantity .

The system will check the book availability and if the book qty is available the system will ask for customer detail

Then store the detail and total of the customer 
```
Do you want to buy book(Y/N)?
Y
Enter the book ID of the book you want to buy:
1
Enter the quantity of the book you want to buy:
3
Enter the customer name:
Megha
Enter the customer contact:
9845678690
```
After, you have entered the details correctly like in the above example, we will have statement telling
>The customer is added
---
If you enter the choice as 3,

Then the system will present you the customer history of the bookstore 
```
Loading sales history

Customer Number :1
Customer Name: Simran
Customer Contact: 9825106629
Total Balance: 300
Purchase Date: 2024-02-14T08:39:49.134Z

Customer Number :2
Customer Name: megha
Customer Contact: 9845678690
Total Balance: 1050
Purchase Date: 2024-03-26T13:40:16.324Z
```