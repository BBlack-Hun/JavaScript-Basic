/**
 * 조건문1
 */

const a = 1;

// {} 블록 안에 어느 것을 쓰면 된다.
if (a + 1 === 2) {
  console.log('a+1이 2 입니다.');
}

console.log('==========================================');

if (a + 1 === 2) {
  const a = 2;
  // var을 쓸 경우 a의 값이 바뀌어 버린다.
  // var a = 2;
  console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);

console.log('==========================================');

const b = 7;

if (b > 15) {
  console.log('b가 15보다 큽니다.');
} else {
  console.log('b가 15보다 크지 않습니다.');
}

console.log('==========================================');

if (b === 5) {
  console.log('5 입니다.');
} else if (b === 10) {
  console.log('10 입니다.');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}
