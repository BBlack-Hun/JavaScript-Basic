/**
 * function4 -> arrow function
 */

// const add = (a, b) => {
//   return a + b;
// };

// 위와 동일한 함수이다.

const add = (a, b) => a + b;

const sum = add(1, 2);

console.log(sum);

const hello = (name) => {
  console.log(`Hello, ${name}!`);
};

hello('bblack_hun');

// 화살표 함수에서의 this와 함수에서의 this는 다르다! 잘 알고 사용해야 한다.
