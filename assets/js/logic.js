// Function to toggle light/dark mode.
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
// Determine current mode (dark or light)
let mode;
if (document.body.classList.contains('dark')) {
  mode = 'dark'; // If body has class 'dark', set mode to 'dark'
} else {
  mode = 'light'; // Otherwise, set mode to 'light'
}
// Save the current mode to local storage
localStorage.setItem('mode', mode);
}

function readFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
}
// Event listener for mode toggle
const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', toggleMode);

// Check mode on page load
document.addEventListener('DOMContentLoaded', () => {
    readFromLocalStorage('mode');
});