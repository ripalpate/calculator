import{setMathType,addNumber, calculate} from '../components/calculator.js'
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const equalButton = document.getElementById('equalButton');
const divideButton = document.getElementById('divideButton');
const addButton = document.getElementById('addButton');
const multiplyButton = document.getElementById('multiplyButton');
const subtractButton =document.getElementById('subtractButton');

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
}
// function to divide numbers
const divideButtonEvent = () => {
    divideButton.addEventListener('click', (e)=>{
        e.target.className += 'selectedButton';
        setMathType('divide');
    })
} 
// function to multiply numbers
const multiplyButtonEvent = () => {
    multiplyButton.addEventListener('click', (e)=>{
        e.target.className += 'selectedButton';
        setMathType('multiply');
    })
}
// function to add numbers
const addButtonEvent = () => {
    addButton.addEventListener('click', (e)=>{
        e.target.className += 'selectedButton';
        setMathType('add');
    })
}
// function to subtract number
const subtractButtonEvent = () => {
    subtractButton.addEventListener('click', (e)=>{
        e.target.className += 'selectedButton';
        setMathType('subtract');
    })
}
const oneButtonEvent = () => {
    oneButton.addEventListener('click', addNumberCaller);
}
const twoButtonEvent = () => {
    twoButton.addEventListener('click', addNumberCaller);
}
const threeButtonEvent = () => {
    threeButton.addEventListener('click', addNumberCaller);
}
const fourButtonEvent = () => {
    fourButton.addEventListener('click', addNumberCaller);    
}
const fiveButtonEvent = () => {
    fiveButton.addEventListener('click', addNumberCaller);
}
const sixButtonEvent = () => {
    sixButton.addEventListener('click', addNumberCaller);
}
const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', addNumberCaller);
};

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNumberCaller);
};

const nineButtonEvent = () => {
    nineButton.addEventListener('click', addNumberCaller);
};

const equalButtonEvent = () => {
    equalButton.addEventListener('click', () => {
        calculate();
    })    
}

const attachEvents = () => {
    oneButtonEvent();
    twoButtonEvent();
    threeButtonEvent();
    fourButtonEvent();
    fiveButtonEvent();
    sixButtonEvent();
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
    equalButtonEvent();
    divideButtonEvent();
    multiplyButtonEvent();
    addButtonEvent();
    subtractButtonEvent();
}
export default attachEvents;