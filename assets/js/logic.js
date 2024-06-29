// Function to toggle light/dark mode.
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark");
    body.classList.toggle("light");

    // Determine current mode (dark or light)
    let mode;
    if (body.classList.contains('dark')) {
        mode = 'dark'; // If body has class 'dark', set mode to 'dark'
        toggleButton.textContent = '🌙'; // Set button text to moon emoji
    } else {
        mode = 'light'; // Otherwise, set mode to 'light'
        toggleButton.textContent = '☀️'; // Set button text to sun emoji
    }

    // Save the current mode to local storage
    localStorage.setItem('mode', mode);
}

// Function to read from local storage and set the mode
function readFromLocalStorage(key) {
    const mode = localStorage.getItem(key);
    if (mode === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        toggleButton.textContent = '🌙'; // Set button text to moon emoji
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        toggleButton.textContent = '☀️'; // Set button text to sun emoji
    }
}

// Event listener for mode toggle button
const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', toggleMode);

// Check mode on page load
document.addEventListener('DOMContentLoaded', () => {
    readFromLocalStorage('mode');
});