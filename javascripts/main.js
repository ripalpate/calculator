import {calculate} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

const initializeApp = ()=> {
    buttonEvents();
    //calculate(4 , 2, 'multiply'); //8
    //calculate(4 , 2, 'subtract'); //2
    //calculate(4 , 2, 'add'); //6 
    //calculate(4 , 2, 'divide'); //2
}
initializeApp();