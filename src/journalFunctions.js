



function makeJournalEntryComponent (journalEntry) {
  return `
  <div> ${journalEntries.dateofEntry} </div>
  <div> ${journalEntries.conceptsCovered} </div>
  <div> ${journalEntries.journalEntry} </div>
  
`
}


const renderJournalEntries = (entries) => {
 for (let index = 0; index < entries.length; index++) {
   const element = entires[index];
    printToDom(element)
 }
}

function printToDom (item) {
  document.querySelector('entrylog').innerHTML += makeJournalEntryComponent
}

// Invoke the render function

renderJournalEntries(journalEntries)

