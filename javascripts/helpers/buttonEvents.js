import{setMathType,addNumber, calculate} from '../components/calculator.js'

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const equalButton = document.getElementById('equalButton');
const divideButton = document.getElementById('divideButton')

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
}

const divideButtonEvent = () => {
    divideButton.addEventListener('click', (e)=>{
        e.target.className += 'selectedButton';
        setMathType('divide');
    })
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
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
    equalButtonEvent();
    divideButtonEvent();
}
export default attachEvents;