// TODO: Create a variable that selects the form element
const form = document.getElementById('post-form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (username === '' || title === '' || content === '') {
      alert('Please fill in all fields.');
      return;
  }

  const post = {
    username: username,
    title: title,
    content: content,
    date: new Date().toLocaleString() // converts a Date object to a string. Example output: 6/30/2023, 10:30:45 AM. 
    // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  };

  // Read existing posts from local storage
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);

  // Store the updated posts array back in local storage
  localStorage.setItem('posts', JSON.stringify(posts));

  // Redirect to the blog page
  redirectPage('blog.html');
}

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmission);