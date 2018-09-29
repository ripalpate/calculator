import {printToDom} from './helpers/utility.js'
import {multiply} from './helpers/maths.js'

// function to Calculate
const  calculate = (num1, num2, mathType) => {
    let answer = 0;
    switch(mathType){
    case 'multiply': 
        answer = multiply(num1, num2);
    break;
    case 'divide':
        answer = num1/num2;
    break;
    case 'add' : 
        answer = num1+num2 ;
    break;
    case 'subtract': 
        answer = num1-num2;
    break;
    default: 
        answer ='nope';
    }
    printToDom(answer, 'result');
};

calculate(4 , 2, 'multiply'); //8