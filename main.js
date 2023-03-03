
// ! Variables
// Inputs & Outputs Variables
let inputA = document.getElementById("input-1");
let inputB = document.getElementById("input-2");
let output = document.getElementById("output");

// Output Per Line Variable
let outputArray = [];

// Option Variables
let removeWhiteSpaceOption = document.getElementById("remove-white-space");
let removeEmptyLinesOption = document.getElementById("remove-empty-lines");
let customSeperatorOption = document.getElementById("seperator-input");
let customSeperatorUserInput;

// Option Variable Storage
let filteredA = [];
let filteredB = [];


// ! Functions
function combine () {
    output.value = "";
    // Input Per Line Variables
    let inputAArray = inputA.value.split(/\r?\n/);
    let inputBArray = inputB.value.split(/\r?\n/);

    // Input Per Line Backup Variable
    let inputAArrayResult = inputA.value.split(/\r?\n/);
    let inputBArrayResult = inputB.value.split(/\r?\n/);

    if (customSeperatorOption.value === "") {
        customSeperatorUserInput = " ";
    } else {
        customSeperatorUserInput = customSeperatorOption.value;
    }
    //  If remove whitespace is true 
    if(removeWhiteSpaceOption.checked === true) {
        for (let a = 0; a < inputAArray.length; a++) {
            inputAArrayResult[a] = inputAArray[a].replace(/\s+/g, '');
        }
        for (let b = 0; b < inputBArray.length; b++) {
            inputBArrayResult[b] = inputBArray[b].replace(/\s+/g, '');
        }
    } else {
        for (let a = 0; a < inputAArray.length; a++) {
            inputAArrayResult[a] = inputAArray[a];
        }
        for (let b = 0; b < inputBArray.length; b++) {
            inputBArrayResult[b] = inputBArray[b];
        }
    }
    //  If remove empty lines is true
    if(removeEmptyLinesOption.checked === true) {
        function myFilter(elm){
            return (elm != null && elm !== false && elm !== "");
        }
        filteredA = inputAArrayResult.filter(myFilter)
        filteredB = inputBArrayResult.filter(myFilter);
        inputAArrayResult = [];
        inputBArrayResult = [];
        for(let a = 0; a < filteredA.length || a <=filteredB.length; a++) {
            inputAArrayResult[a] = filteredA[a];
            inputBArrayResult[a] = filteredB[a];
        }
    } 
    for (let a = 0; a < inputAArray.length || a < inputBArray.length; a++) {
        if(inputAArrayResult[a] === undefined) {
            inputAArrayResult[a] = "";
        }
        if(inputBArrayResult[a] === undefined) {
            inputBArrayResult[a] = "";
        }
        outputArray[a] = inputAArrayResult[a] + customSeperatorUserInput + inputBArrayResult[a];
    }
    if(removeEmptyLinesOption.checked === true) {
        outputArray.pop();
    }
    // ? Outputting each output per line
    output.value = outputArray.join("\n");
}