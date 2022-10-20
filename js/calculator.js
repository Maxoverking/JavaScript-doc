const previousTextElement = document.querySelector('[data-previous');
const currentTextElement = document.querySelector('[data-current');

const numbersBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');

const cleanBtn = document.querySelector('[data-clean]'); 
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');


class Calculator{
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clean()
    }
    clean() { 
        this.previousOperand = ""
        this.currentOperand = ""
        this.operation = undefined
        
     }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
        
    }
    appendNumber(number) {
        if(number ==='.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
        
    }

    chooseOperation(operation) {

        // console.log("🚀 ~ operation", operation);
        
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute() 
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.operation) {
            case '+':
               computation = prev + curr
                break;
            case '-':
               computation = prev - curr
                break;
            case '*':
               computation = prev * curr
                break;
            case '÷':
               computation = prev / curr
                break;
            default:
                return;
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""
    }
    getDisplayNumber(number) {
        const stringNumbers = number.toString()
        const integerDigits = parseFloat(stringNumbers.split('.')[0])
        const decimalDigits = stringNumbers.split('.')[1]
        let integerDisplay;
        if (isNaN(integerDigits)) {
           integerDisplay = ' '
        } else {
            integerDisplay = integerDigits.toLocaleString('en' , {maximumFractionDigits:0})
        }
        if (decimalDigits != null) { 
            return `${integerDisplay}.${decimalDigits}`   
        } else {
            return integerDisplay;
        }
    }
    updateDisplay() {
        this.currentTextElement.innerText = this.getDisplayNumber(this.currentOperand) 
        if (this.operation != null) {
            this.previousTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)}
             ${this.operation}` 
        } else {
           this.previousTextElement.innerText  = ''
        }
        
        
    }
}
const calculator = new Calculator(previousTextElement, currentTextElement);

numbersBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText)
        console.log('object');
        calculator.updateDisplay()
    })
})

operationBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperation(btn.innerText)
        console.log('fdgdfg');
        calculator.updateDisplay()
    })
})
equalsBtn.addEventListener('click', btn => {
    calculator.compute()
    calculator.updateDisplay() 
})
cleanBtn.addEventListener('click', btn => {
    calculator.clean()
    calculator.updateDisplay() 
})
deleteBtn.addEventListener('click', btn => {
    calculator.delete()
    calculator.updateDisplay() 
})

