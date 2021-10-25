/**
 * fucntion1
 */

function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum);

function Hello(name) {
  console.log('Hello, ' + name + '!');
}

Hello('bblack_hun');

console.log('===============================');

function hello2(name) {
  //   console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

// hello2('bblack_hun');

const result = hello2('bblack_hun');
console.log(result);
