/// Fetch all necessary DOM elements
// You can take reference from sortingPage.js file for element's IDs and classes.


// This array will store the values entered by the user
let array = [];

const size=document.querySelector("#size")
const arrayElements=document.querySelector("#elements")
const generate=document.querySelector("#generate")
const sort=document.querySelector("#sort")
const barsContainer=document.querySelector("#bars-container")

/* This function will read user input and create vertical bars */
function generateArray() {

    // TODO: Clear the previous bars and reset the array
    barsContainer.innerHTML=""
    array=[]
    const n = Number(size.value.trim());
    const manual = arrayElements.value.trim();

    // CASE 1: Manual comma-separated input
    if (manual !== "") {
        array = manual.split(",").map(num => Number(num.trim()));
    }
    // CASE 2: Size input — generate random numbers
    else if (!isNaN(n) && n > 0) {
        for (let i = 0; i < n; i++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
    }

    // TODO: Read the array size from the input (sizeInput)
    // Read custom input and convert to numbers
      //now we have our numbers array
    /*  
       TODO:
       If the user entered custom elements manually:
       - Read elementsInput.value
       - Split the string by commas using .split(",")
       - Convert each item to a number
       - Store the numbers in the array
    */


    /*  
       TODO:
       Loop through the array and create a bar <div> for each number.
       
       Requirements for each bar:
       - Add class "bar"
       - Set the bar height using: value * 3 + "px"
       
       ALSO:
       Inside each bar, create a label that displays the number.

       Steps:
       1. Create a <div> for the bar
       2. Create another <div> for the label (class "bar-label")
       3. Set the label text to the number
       4. Append the label inside the bar
       5. Append the bar inside #bars-container
    */
   for(let i=0;i<array.length;i++){
      const div1=document.createElement("div")
      const div2=document.createElement("div")
      div1.classList.add("bar")
      div2.classList.add("bar-label")
      div1.style.height=array[i]*3+"px"
      div2.innerText=array[i];
      div1.appendChild(div2)
      barsContainer.appendChild(div1)
   }
}


/* This function will handle the full bubble sort animation */
async function bubbleSort() {

    // TODO: Select all bars using document.querySelectorAll(".bar")


    /*  
       TODO: Implement Bubble Sort logic step-by-step

       For EACH comparison:
       - Highlight the two bars (yellow color)
       - If array[j] > array[j+1], then swap the two values
       - After swapping:
           * Update bar heights
           * Update bar labels so they display the new values
       - Wait for 1000 ms between steps (using await new Promise(...))
       - Reset bar color back to blue (#4c8bf5)
    */

       const bars = document.querySelectorAll(".bar");

       for (let i = array.length - 1; i >= 0; i--) {
   
           for (let j = 0; j < i; j++) {
   
               // Highlight bars being compared
               bars[j].style.background = "yellow";
               bars[j + 1].style.background = "yellow";
   
               // Wait so user can see comparison
               await new Promise(resolve => setTimeout(resolve, 305));
   
               // Compare and swap in array
               if (array[j] > array[j + 1]) {
   
                   // Swap values in array
                   let temp = array[j];
                   array[j] = array[j + 1];
                   array[j + 1] = temp;
   
                   // Update bar heights
                   bars[j].style.height = array[j] * 3 + "px";
                   bars[j + 1].style.height = array[j + 1] * 3 + "px";
   
                   // Update labels
                   bars[j].querySelector(".bar-label").innerText = array[j];
                   bars[j + 1].querySelector(".bar-label").innerText = array[j + 1];
               }
   
               // Reset color
               bars[j].style.background = "#4c8bf5";
               bars[j + 1].style.background = "#4c8bf5";
           }
   
           // Mark final sorted element in green
           bars[i].style.background = "#22c55e";
       }
    /*  
       TODO:
       After each complete pass of Bubble Sort,
       mark the final sorted bar as green (#22c55e)
    */

}


/* Add Event Listeners */

// TODO: When "Generate Bars" button is clicked, call appropriate function
generate.addEventListener("click", generateArray);
sort.addEventListener("click", bubbleSort);


// TODO: When "Start Sorting" button is clicked, call appropriate function

