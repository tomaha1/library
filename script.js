let myLibrary = [];
let Book1;
let x = 0;
const para = document.getElementById("table");

const newBook = document.getElementById('new_book');

class Book {
    constructor(author, title, pages, read) {
        this.Author = author;
        this.Title = title;
        this.Pages = pages;
        this.Read = read;
    }
}

function addBookToLibrary(ksiazka) {
  myLibrary.push(ksiazka);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  newBook.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();
    // validate the form
    console.log(newBook.elements[0].value);
    console.log(newBook.elements[1].value);
    console.log(newBook.elements[2].value);
    console.log(newBook.elements[3].value);
    //let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    //let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    // if valid, submit the form.
    //if (nameValid && emailValid) {
    //  alert("Demo only. No form was posted.");
    Book1 = new Book(newBook.elements[0].value, newBook.elements[1].value, newBook.elements[2].value, newBook.elements[3].value);
    addBookToLibrary(Book1);
    add_line(newBook.elements[0].value, newBook.elements[1].value, newBook.elements[2].value, newBook.elements[3].value);
    //document.getElementById("demo").innerText = `$myLibrary[0].author`;
    closeForm();
    })  
  //}
  ;

  //funkcja tworzaca kolejne wiersze tabeli
  function add_line(author, title, pages, read) {
    
    const nextLine = document.createElement("tr");
    para.appendChild(nextLine);
    nextLine.dataset.row = x;

    const aut = document.createElement("td");
    const auttext = document.createTextNode(author);
    aut.appendChild(auttext);
    nextLine.appendChild(aut);

    const tit = document.createElement("td");
    const tittext = document.createTextNode(title);
    tit.appendChild(tittext);
    nextLine.appendChild(tit);

    const num = document.createElement("td");
    const numtext = document.createTextNode(pages);
    num.classList.add("numbers");
    num.appendChild(numtext);
    nextLine.appendChild(num);

    const rea = document.createElement("td");
    const reatext = document.createTextNode(read);
    rea.appendChild(reatext);
    nextLine.appendChild(rea);

    const rem = document.createElement("td");
    const rembutton = document.createElement("button");
    const remtext = document.createTextNode('X');
    rem.classList.add("remove");
    rem.appendChild(rembutton);
    rembutton.dataset.row = x;
    rembutton.appendChild(remtext);
    nextLine.appendChild(rem);

    rembutton.addEventListener("click", function (event) {
      const przycisk = event.target.dataset.row;

      console.log(event.target.dataset.row);
      const iden = `[data-row="${event.target.dataset.row}"]`;
      const dousuniecia = document.querySelector(`${iden}`);
      dousuniecia.remove();
      delete myLibrary[przycisk];
      console.log(myLibrary);
    })
    x++;
  }

 
 
 
 
 
 
 
 
