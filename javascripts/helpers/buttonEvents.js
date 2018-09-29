import{addNumber} from '../components/calculator.js'

const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');

const addNUmberCaller = (e) => {
    addNumber(e.target.innerHTML);
}
const sevenButtonEvent = () => {
    sevenButton.addEventListener('click', addNUmberCaller);
};

const eightButtonEvent = () => {
    eightButton.addEventListener('click', addNUmberCaller);
};

const nineButtonEvent = () => {
    nineButton.addEventListener('click', (e)=>{
        console.log('you clicked', e.target.innerHTML);
    })
};


const attachEvents = () => {
    sevenButtonEvent();
    eightButtonEvent();
    nineButtonEvent();
}
export default attachEvents;