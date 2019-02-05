

function makeJournalEntryComponent (element) {
  return `
  <div class="divdate"> <strong>${element.journalDate}</strong> </div>
  <break>
  <div class=""> ${element.conceptsCovered}</div>
  <div> ${element.journalEntry} </div>
 <div> ${element.moodOfTheDay} </div>
`

}



// const renderJournalEntries = (entries) => {
//  for (let index = 0; index < entries.length; index++) {
//    const element = makeJournalEntryComponent(entries[index]);
//     printToDom(element)
//  }
// }

// function printToDom (makeJournalEntryComponent) {
//   const el = document.getElementById("entryLog")
//  el.innerHTML += makeJournalEntryComponent
//  }
 