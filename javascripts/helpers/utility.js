// function to Print to DOM
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

export {printToDom}
// or export default printToDom and also in you import print printToDom without curly braces.