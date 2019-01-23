

fetch("http://localhost:3000/entries") // Fetch from the API
.then(response => response.json())  // Parse as JSON
.then(entries => {
    // What should happen when we finally have the array?
    entries.forEach()
})