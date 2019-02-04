/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
getData().then(entries => {
    entries.forEach(entry => {
       let journalFunc = makeJournalEntryComponent(entry)
       printToDom(journalFunc)

    });
})





journEntryBtn.addEventListener('click', (e) => {

    indivJournalEnt = document.querySelector("#body")
    journEntryBtn = document.querySelector("#journEntryBtn");
    date = document.querySelector('#dateOfEntry')
    conceptsCovered = document.querySelector('#conceptscovered')
    journalEntry = document.querySelector('#journalEntry')
    mood = document.querySelector('#moodOfTheDay')

}) 


