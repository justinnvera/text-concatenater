// ! Variables
// Inputs & Outputs Variables
let inputA = document.getElementById("input-1");
let inputB = document.getElementById("input-2");
let output = document.getElementById("output");

// Option Variables
let removeWhiteSpaceOption = document.getElementById("remove-white-space-input");
let removeEmptyLines = document.getElementById("remove-empty-lines");

// Results Variables
let outputResult;



// ! Functions
function combine() { 
    // If remove white space is true 
    if (removeWhiteSpaceOption.checked === true) {
        outputResult = inputA.value.replace(/\s/g,'') + inputB.value.replace(/\s/g,'');
    } else {
        outputResult = inputA.value + inputB.value;   
    }
    console.log(outputResult);
}

