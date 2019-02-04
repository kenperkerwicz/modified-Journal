function getData () {
    return fetch(`http://localhost:3000/entries`) // Fetch from the API
    .then(response => response.json())}  
    
