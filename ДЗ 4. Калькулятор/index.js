const operator = prompt('(plus,div,mult,minus)'); 
 
const num1 = prompt('num1'); 
 
const num2 = prompt('num2'); 
 
switch (operator) { 
    case 'plus': 
        alert (`${num1} + ${num2} = ${+num1 + +num2}`); 
        break; 
} 
 
switch (operator) { 
    case 'minus': 
        alert (`${num1} - ${num2} = ${num1 - num2}`); 
        break; 
} 
 
switch (operator) { 
    case 'mult': 
        alert (`${num1} * ${num2} = ${num1 * num2}`); 
        break; 
} 
 
switch (operator) { 
    case 'div': 
        alert (`${num1} / ${num2} = ${num1 / num2}`); 
        break; 
}
