// TODO: Create a variable that selects the main element
const main = document.querySelector("main");

// TODO: Create a function that builds an element and appends it to the DOM
function createElementAndAppend(tag, text, parent) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.appendChild(element);
}
// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts
