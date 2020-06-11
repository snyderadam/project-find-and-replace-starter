// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


replaceAllButton.addEventListener('click', function(){
    let inputToFind = findInput.value
    let inputToReplace = replaceInput.value
    
    for(let index = 0; index < rowElements.length; index ++){
       
     let searchResults =  getCellElements(rowElements[index])
        
console.log(searchResults)
      
    for(let index2 = 0; index2 < searchResults.length; index2 ++){
            if (searchResults[index2].innerHTML.includes(inputToFind)){
                
                let newResult = inputToFind.replace(inputToFind,inputToReplace)
                searchResults[index2].innerHTML = newResult

            }

      }
        
        


}

})

// So .replace doesn't do anything to the HTML.  All it does is give us back the modified string that we want.  So I would save the results of .replace() to a variable and then reassign the innerHTML of our currentCell (seachResults[index2]) to that variable 


// Inside this loop, use the getCellElements() function (already provided in the starter code) and assign the resulting array of cell elements to a variable.
// Write a nested loop which loops over the array of cell elements.
// For each cell element, check if a cell contains the user-provided search string. Use the string method includes().
// If a cell does contain the user-provided search string, use innerHTML and the string method replace() to replace the user-provided search string with the user-provided replacement string.








// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
