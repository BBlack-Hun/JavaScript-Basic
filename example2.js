/**
 * 연산자
 */

let value = 1; // =은 대입 연산자

// 산술 연산자 => 사칙연산자 (+, -, *, /)

let a = 1 + 2 - (3 * 4) / 2;
console.log(a);

// 증가 연산자

let b = 1;

console.log(b++);
console.log(b);
console.log(++b);

// 대입 연산자

let c = 1;
c += 1; // 덧셈 말고, 뺄셈, 곱셈, 나눗셈 다 사용 가능하다.
console.log(c);

// 논리 연산자

/**
 * 연산 우선순위 대로 표기
 * NOT !
 * AND &&
 * NOT !
 */

const d = !false;
console.log(d);

const e = true && true; // 양쪽이 모두 true일때만 true이다.

const f = true || false; // 둘중의 하나만 true여도 ture이다.

const value2 = !((true && false) || (true && false) || !false);
// !(ture && false || ture && false || true)
// !(false || false || true)
// !(ture)
// false

console.log(value2);
