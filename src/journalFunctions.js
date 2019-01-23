

function makeJournalEntryComponent (journalEntries) {
  return `
  <div class="divdate"> ${journalEntries.journalDate} </div>
  <break>
  <div class=""> ${journalEntries.conceptsCovered} </div>
  <div> ${journalEntries.journalEntry} </div>
`
}


const renderJournalEntries = (entries) => {
 for (let index = 0; index < entries.length; index++) {
   const element = makeJournalEntryComponent(entries[index]);
    printToDom(element)
 }
}

function printToDom (makeJournalEntryComponent) {
 const el = document.getElementById("entryLog")
el.innerHTML += makeJournalEntryComponent
}

// Invoke the render function

renderJournalEntries(journalEntries);


