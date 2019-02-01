fetch(`http://localhost:3000/entries`) // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(entries => {
        // What should happen when we finally have the array?
        
      

        for (let index = 0; index < entries.length; index++) {
          let element = entries[index];
         
          journal = element.journalDate

          concept = element.conceptsCovered

          entry = element.journalEntry

          mood = element.moodOfTheDay

          let journBuilder = makeJournalEntryComponent(element)

          printToDom(journBuilder)
        }
    })