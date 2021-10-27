/**
 * 연습과 퀴즈
 */

// 파라미터로 들어온 값을 모두 더하시오
function sumOf(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

// 3보다 큰 수만 더해서 값을 반환하세요!
function biggerThenThree(nubmers) {
  sum = 0;
  for (let number of numbers) {
    if (number < 3) continue;
    sum += number;
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThenThree(numbers));
