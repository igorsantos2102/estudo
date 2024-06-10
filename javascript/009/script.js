// Selecionar elementos do display e botões
let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.button');
let resultado = document.querySelector('#resultado');
let apagar = document.querySelector('#delete');

let currentInput = '';  // Armazenar o número atual
let operation = null;   // Armazenar a operação
let previousInput = ''; // Armazenar o número anterior

// Função para atualizar o display
function updateDisplay(value) {
    display.innerHTML = value;
}

// Adicionar event listeners aos botões
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.value;

        if (button.classList.contains('number')) {
            // Se for um número, atualizar o input atual
            currentInput += buttonValue;
            updateDisplay(currentInput);
        } else if (button.classList.contains('operation')) {
            // Se for uma operação, armazenar o input atual e a operação
            if (currentInput === '') return; // Evitar operação sem número

            previousInput = currentInput;
            currentInput = '';
            operation = buttonValue;
        } else if (button.id === 'resultado') {
            // Se for o botão de resultado, calcular e mostrar o resultado
            if (currentInput === '' || previousInput === '' || operation === null) return;

            let result;
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    return;
            }

            updateDisplay(result);
            currentInput = result.toString();
            previousInput = '';
            operation = null;
        } else if (button.id === 'delete') {
            // Se for o botão de apagar, limpar o display e os inputs
            currentInput = '';
            previousInput = '';
            operation = null;
            updateDisplay('');
        }
    });
});
