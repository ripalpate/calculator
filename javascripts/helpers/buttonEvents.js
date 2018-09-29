import{addNumber} from '../components/calculator.js'

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');

const addNumberCaller = (e) => {
    addNumber(e.target.innerHTML);
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


const attachEvents = () => {
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
}
export default attachEvents;