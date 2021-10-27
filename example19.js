/**
 * 배열의 내장함수 - map
 */
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const squared = [];

// for (let i = 0; i < array.length; i++) {
//   squared.push(array[i] * array[i]);
// }

// console.log(squared);

const square = (n) => n * n;

const squared = array.map(square);

// 위와 동일함
const squared2 = array.map((n) => n * n);

console.log(squared);

const items = [
  {
    id: 1,
    text: 'hello',
  },
  {
    id: 2,
    text: 'bye',
  },
];

const texts = items.map((item) => item.text);
console.log(texts);

const superheros = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// 특정 항목이 몇번째 항목인지 알고 싶을때
const index = superheros.indexOf('토르');
console.log(index);

const todos = [
  { id: 1, text: '자바스크립트 입문', done: true },
  { id: 2, text: '객체와 배열 배우기', done: true },
  { id: 3, text: '함수 배우기', done: true },
  { id: 4, text: '배열 내장함수 배우기', done: false },
];

// indexOf로는 id값이 2인 것을 찾을 수 없다. -> findIndex를 사용하여 찾을 수 있다. 특정 조건을 입력하면 그 조건을 만족하는 것의 인덱스를 알려준다.
const index2 = todos.findIndex((todo) => todo.id === 3);
console.log(index2);

// find라는 함수도 있다. findIndex랑은 다르다. find는 찾은 그 값을 반환한다.
// 위의 조건으로 찾을시 id가 3인 것의 객체 전체를 반환해준다.
const index3 = todos.find((todo) => todo.id === 2);
console.log(index3);
