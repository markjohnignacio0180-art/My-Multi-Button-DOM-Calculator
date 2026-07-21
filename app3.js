const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const resultText = document.querySelector('#resultText');
const addBtn = document.querySelector('#addBtn');
const subBtn = document.querySelector('#subBtn');
const mulBtn = document.querySelector('#mulBtn');
const divBtn = document.querySelector('#divBtn');
const clearBtn = document.querySelector('#clearBtn');



function calculate(operation) {
    const val1 = Number(num1Input.value);
    const val2 = Number(num2Input.value);


    
    if (operation === "clear") {
       num1Input.value = ""
       num2Input.value= ""
       resultText.textContent = "Result:"
        
        return;
    }


    
    if (num1Input.value === "" || num2Input.value === "" || isNaN(val1) || isNaN(val2)) {
        resultText.textContent = "Error: Please enter two valid numbers!";
        return;
    }


    let result = 0;



    switch (operation) {
    
        case "add":
            result = val1 + val2;
            resultText.textContent = `Result: ${val1} + ${val2} = ${result}`;
            break;


        case "subtract":
             result = val1 - val2;
            resultText.textContent = `Result: ${val1} - ${val2} = ${result}`;

            break;


        case "multiply":
                      result = val2 * val1;
            resultText.textContent = `Result: ${val1} * ${val2} = ${result}`;
            break;


        case "divide":
            result = val1 / val2;
            resultText.textContent = `Result: ${val1} / ${val2} = ${result}`;
        break;


        default:
            resultText.textContent = "Unknown operation.";
    }
}



addBtn.addEventListener('click', () => calculate('add'));
subBtn.addEventListener('click', () => calculate('subtract'));
mulBtn.addEventListener('click', () => calculate('multiply'));
divBtn.addEventListener('click', () => calculate('divide'));
clearBtn.addEventListener('click', () => calculate('clear'));
