let myLibrary = [];

const newBook = document.getElementById('new_book');
const author = newBook.elements[0].value;
const title = newBook.elements[1].value;
const pages = newBook.elements[2].value;
const read = newBook.elements[3].value;

//jesli powyzsze nie bedzie dzialac to zmienic powyzej nazwy (z dopisanymi cyframi) i zastosowac ponizsze
//let author = author0.value;
//let title = title1.value;
//let pages = pages2.value;
//let read = read3.value;

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
  myLibrary.push(Book);
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
    }
  //}
  );