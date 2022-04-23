/*
https://launchschool.com/exercises/6d0a9bf4
 
1:05 1:54
A stack uses Array#pop and Array#push 

Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, 
then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value 
of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. 
If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Important rules:
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., 
they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

Problem:
"Programs will be supplied to the function via a string argument"
So we have to create the main minilang function which will handle:
1. interpreting the incoming commands
2. appropriately put values in the register
3. update and return the result of the given command.

The input contains numbers which are the values, and strings, which are the commands to be executed.
We need to differentiate between the two correctly. 

Example:
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7
PUSH : Push the register value onto the stack. ** Leave the value in the register **.
1. The values 3, 4, and 5 should be pushed onto the register with 5 being at the top of the stack.
PRINT : Print the register value.
2. 5 should be printed to the screen.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
3. 5 is popped from the stack, added to the register value of 5, and a value of 10 is stored in the register.
POP : Remove the topmost item from the stack and place it in the register.
4. 10 is popped and placed in the register.
5. The next item at the top would be 4, which is printed to the screen.
6. The add command leads to 3 being popped from the stack and added to the register value of 4, which gives us 7
7. 7 is then printed to the screen. 

Data Structures:
Since the input is a long string made up of specific string commands,
we can use arrays of split strings to execute each individual command. 
The stack is going to be an array since we'll be using #pop and #push.

Algorithm:
1. Initialize a register variable to 0, and a stack variable to an empty array.
2. Create the appropriate functions for all the minilang commands
(PRINT, PUSH, add, sub, mult, div, remainder, POP)

3. For the main minilang function which takes the string input:
  - Split the string and store it in a variable called inputCommands

4. For each input command, use conditionals to determine what to do when the value is a number, vs a string command.
  - If it's a number, (use regex check), put the value into the register.
  - If it's a string command, execute the function with the same num by calling the command name on minilang.

*/

let register = 0;
let stack = [];

minilang.PRINT = () => console.log(register);
minilang.PUSH = () => stack.push(register);
minilang.POP = () => register = stack.pop();
minilang.ADD = () => register += stack.pop();
minilang.SUB = () => register -= stack.pop();
minilang.MULT = () => register *= stack.pop();
minilang.DIV = () => register = Math.floor(register / stack.pop());
minilang.REMAINDER = () => register %= stack.pop();

function minilang(str) {
  let inputCommands = str.split(' ');

  inputCommands.forEach( command => {
    if (/[0-9]/.test(command)) {
      register = parseInt(command, 10);
    } else {
      minilang[command]();
    }
  });
}