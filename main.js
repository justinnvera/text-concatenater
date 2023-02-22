// ! Variables
// Inputs & Outputs Variables
let inputA = document.getElementById("input-1");
let inputB = document.getElementById("input-2");
let output = document.getElementById("output");

// Option Variables
let removeWhiteSpaceOption = document.getElementById("remove-white-space");
let removeEmptyLinesOption = document.getElementById("remove-empty-lines");
let customSeperatorOption = document.getElementById("seperator-input");

// ! Functions
function combine () {
    // Default output value
    output.value = inputA.value + customSeperatorOption.value + inputB.value;
    // If remove whitespace is true 
    if(removeWhiteSpaceOption.checked === true) {
        output.value = inputA.value.replace(/\s+/g, '') + customSeperatorOption.value + inputB.value.replace(/\s+/g, '');
    }
    // If remove empty lines is true
    if(removeEmptyLinesOption.checked === true) {
        output.value = inputA.value.replace(/^[ \t]*[\r\n]+/gm, "") + customSeperatorOption.value + inputB.value.replace(/^[ \t]*[\r\n]+/gm, "");
    }
}