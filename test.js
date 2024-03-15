const input = document.getElementById('name');
const pages = document.getElementById('pages');
const button = document.getElementById('submit');
const booksContainer = document.getElementById('div');

let array = [];

button.addEventListener('click', (e) => {
    e.preventDefault();

    // Get input values
    const titleValue = input.value;
    const pagesValue = pages.value;

    // Create a book object
    const book = {
        input: titleValue,
        pages: pagesValue
    };

    // Add the book to the array
    array.push(book);

    // Update the DOM
    updateDOM();
});

function updateDOM() {
    // Clear existing content
    booksContainer.innerHTML = "";

    // Iterate over the array and create elements
    array.forEach((book) => {
        const titleElement = document.createElement("p");
        titleElement.textContent = book.input;
        booksContainer.appendChild(titleElement);

        const pagesElement = document.createElement("p");
        pagesElement.textContent = book.pages;
        booksContainer.appendChild(pagesElement);
       const remove = document.createElement("button")
        remove.textContent = "remove";
        booksContainer.appendChild(remove);
        remove.addEventListener("click",() =>{
           array.splice(0,1);
           updateDOM();
             })
            
    });
   
}
