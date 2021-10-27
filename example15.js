/**
 * 반복문3
 */

const numbers = [10, 20, 30, 40, 50];

// for of는 배열을 다룰 때 주로 쓴다.
for (let number of numbers) {
  console.log(number);
}

// 객체를 받아오는 방법

const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2,
};

// console.log(Object.entries(doggy));
// console.log(Object.keys(doggy));
// console.log(Object.values(doggy));

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
