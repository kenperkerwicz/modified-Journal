

function makeJournalEntryComponent (element) {
  return `
  <div class="divdate"> <strong>${journal}</strong> </div>
  <break>
  <div class=""> ${concept}</div>
  <div> ${entry} </div>
 <div ${mood} </div>
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
 