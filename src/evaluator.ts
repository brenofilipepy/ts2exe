import { createContext, runInContext } from 'vm';

function evaluateExpression(expression: string): any {
    const context = createContext();
    return runInContext(expression, context);
}

function evaluateInput(): void {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const recursiveInput = (): void => {
        readline.question('Type a JavaScript expression to be evaluated (or "exit" to exit): ', (input) => {
            if (input.toLowerCase() === 'exit') {
                readline.close();
                return;
            }

            try {
                const result = evaluateExpression(input);
                console.log('Result:', result == undefined ? 'Valid JavaScript expression' : result);
            } catch (error) {
                console.error('Error while evaluating the expression:', error);
            } finally {
                recursiveInput();
            }
        });
    };

    recursiveInput();
}

evaluateInput();
