/**
 * 배열의 내장함수
 */
const superheros = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// for (let superhero of superheros) {
//   console.log(superhero);
// }

function print(hero) {
  console.log(hero);
}

// superheros.forEach(print);

// 괄호 안에서 바로 함수를 정의해 줘도 된다.
superheros.forEach((hero) => {
  console.log(hero);
});
