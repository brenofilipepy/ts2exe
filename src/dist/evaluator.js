"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vm_1 = require("vm");
function evaluateExpression(expression) {
    var context = (0, vm_1.createContext)();
    return (0, vm_1.runInContext)(expression, context);
}
function evaluateInput() {
    var readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var recursiveInput = function () {
        readline.question('Type a JavaScript expression to be evaluated (or "exit" to exit): ', function (input) {
            if (input.toLowerCase() === 'exit') {
                readline.close();
                return;
            }
            try {
                var result = evaluateExpression(input);
                console.log('Result:', result == undefined ? 'Valid JavaScript expression' : result);
            }
            catch (error) {
                console.error('Error while evaluating the expression::', error);
            }
            finally {
                recursiveInput();
            }
        });
    };
    recursiveInput();
}
evaluateInput();
