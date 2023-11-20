
const Books = [['1','Start with why','Simon Sinek','80','13'],
['2','But how do it know', 'J.Clark scot','59.9','22'],
['3','Clean Code', 'Robert Cecil Martin','50','5'],
['4','Zero to one', 'Peter Thiel','45','12'],
['5','You dont know JS', 'Kyle Simpson','39.9','9']];

function SearchBookByID(BookID) {
    index = 0;
    for(let i = 0; i<Books.length; i++) {
    if(Books[i][0].includes(BookID)) {
        console.log(Books[index])
    } else {
        index++;
    }
}
}

function SearchBookByTitle(Title) {
    index = 0;
    for(let i = 0; i<Books.length; i++) {
    if(Books[i][1].includes(Title)) {
        console.log(Books[index])
    } else {
        index++;
    }
}
}

function SearchBookByAuthor(Author) {
    index = 0;
    for(let i = 0; i<Books.length; i++) {
    if(Books[i][2].includes(Author)) {
        console.log(Books[index])
    } else {
        index++;
    }
}
}

function buyBook(BookTitle,Quantity) {
    index = 0;
    for(let i = 0; i<Books.length; i++) {
    if(Books[i][1].includes(BookTitle)) {
        if(Books[index][4] >= Quantity) {
            console.log('purshase has been made')
            Books[index][4] = Books[index][4] - Quantity
            break;
        } else {
            console.log('out of stock')
            break;
        }
    } else {
        index++;
    }
}
}



SearchBookByID('3')
SearchBookByTitle('You dont know JS')
SearchBookByAuthor('Simon Sinek')

buyBook('You dont know JS',1)
SearchBookByTitle('You dont know JS')
