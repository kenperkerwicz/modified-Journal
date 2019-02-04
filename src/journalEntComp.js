

function makeJournalEntryComponent (element) {
  return `
  <div class="divdate"> <strong>${element.journal}</strong> </div>
  <break>
  <div class=""> ${element.concept}</div>
  <div> ${element.entry} </div>
 <div ${element.mood} </div>
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
 