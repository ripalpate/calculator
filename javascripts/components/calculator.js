
import {printToDom} from '../helpers/utility.js';
import {multiply, divide, add, subtract} from '../helpers/maths.js';

const calc ={
    firstNumber:'',
    secondNumber:'',
    mathType: '',
    display:''
}

// function to Calculate
const  calculate = () => {
    let answer = 0;
    switch(calc.mathType){
    case 'multiply': 
        answer = multiply(calc.firstNumber, calc.secondNumber);
    break;
    case 'divide':
        answer = divide(calc.firstNumber, calc.secondNumber);
    break;
    case 'add' : 
        answer = add(calc.firstNumber, calc.secondNumber) ;
    break;
    case 'subtract': 
        answer = subtract(calc.firstNumber, calc.secondNumber);
    break;
    default: 
        answer ='nope';
    }
    setDisplay(answer);
};

// function to display numbers
const setDisplay = (someNumber) => {
    calc.display = someNumber;
    printToDom(calc.display, 'result');
};

// function to set Math type
const setMathType = (newMathType) => {
    calc.mathType = newMathType;
}

// function to display 0 in the beginning
const initialDisplay =()=> {
    printToDom(0, 'result');
}

// functionn to store first and second number
const addNumber =(num) => {
    if(calc.mathType===''){
        calc.firstNumber += num;
        setDisplay(calc.firstNumber);
    }else {
        calc.secondNumber += num;
        setDisplay(calc.secondNumber);
    }
};

export {calculate, addNumber, setMathType, initialDisplay};