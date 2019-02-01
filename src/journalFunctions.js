

// function makeJournalEntryComponent (element) {
//   return `
//   <div class="divdate"> ${journal} </div>
//   <break>
//   <div class=""> ${concept} </div>
//   <div> ${entry} </div>
//  <div ${mood} </div>
// `
// }


// const renderJournalEntries = (entries) => {
//  for (let index = 0; index < entries.length; index++) {
//    const element = makeJournalEntryComponent(entries[index]);
//     printToDom(element)
//  }
// }

// function printToDom (makeJournalEntryComponent) {
//  const el = document.getElementById("entryLog")
// el.innerHTML += makeJournalEntryComponent
// }

// Invoke the render function

// renderJournalEntries(journalEntries);


// fetch(`http://localhost:3000/entries`) // Fetch from the API
//     .then(response => response.json())  // Parse as JSON
//     .then(entries => {
//         // What should happen when we finally have the array?
        
      

//         for (let index = 0; index < entries.length; index++) {
//           let element = entries[index];
         
//           journal = element.journalDate

//           concept = element.conceptsCovered

//           entry = element.journalEntry

//           mood = element.moodOfTheDay

//           let journBuilder = makeJournalEntryComponent(element)

//           printToDom(journBuilder)
//         }
//     })
    