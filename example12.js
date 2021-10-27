/**
 * 배열
 */

// 정수만 들어있는 배열
const array = [1, 2, 3, 4, 5];

console.log(array);

// 다양한 값들이 들어 있는 배열
const array2 = [1, 'blabla', {}, 4];

console.log(array2[1]);

// objects를 원소로 가지고 있는 배열
const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

// console.log(objects);
// console.log(objects[0]);
// console.log(objects[1].name);

// 배열의 원소를 추가
objects.push({
  name: '멍뭉이',
});

console.log(objects);

// 배열의 길이(원소의 갯수)
console.log(objects.length);
