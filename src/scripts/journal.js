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




let journEntryBtn = document.querySelector("#journEntryBtn");

journEntryBtn.addEventListener('click', (e) => {
  
    let dateId = document.querySelector('#dateOfEntry')
    let conceptsCoveredId = document.querySelector('#conceptscovered')
    let journalId = document.querySelector('#journalEntry')
   let  moodId = document.querySelector('#moodOfTheDay')
//    {"journalDate": "1/18/19",
//    "conceptsCovered": "functions",
//    "journalEntry": "Today was a productive yet humbling day",
//    "moodOfTheDay": "Happy"} 


let newObj = {
    dateObj : dateId.value, 
    conceptsCovered : conceptsCoveredId.value,
    journalObj : journalId.value,
    moodObj : moodId.value

}
for(var value in newObj) {
    if(newObj[value] === "") {
       alert(value + " is blank. Deleting it");
   } else if (newObj[value] === ) {

   }
}
console.log(newObj);

}) 




// Feb 5th work On!
// pass a filter method (or something else?)to only allow parameters Listed below. 
// No characters other than letters, numbers, (), {}, :, and ;

