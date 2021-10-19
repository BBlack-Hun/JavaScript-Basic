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

/**
 * 비교 연산자
 * 사용할때는 꼭 3글자를 (!== or ===) 이용하자!
 */

const g = 1;
const h = 1;

const equals = g === h;
// const equals = g == h; 아래도 사용할 수 있다.
// == 과 ====의 차이점
// 두개일때는 타입을 검사하지 않지만 ===일때는 타입을 검사하기 때문에 예를 들어 1과 '1'은 == 일때는 true, === 일때는 false이다.
console.log(equals);

const i = 1;
const j = '1';
const notEquals = i !== j;

console.log(notEquals);

console.log('===============================');

const k = 10;
const l = 15;
const n = 15;

console.log(k < l);
console.log(l > k);
console.log(l >= k);
console.log(k <= n);

console.log('===============================');

/**
 * 문자열을 붙이는 방법
 */

const m = '안녕';
const o = '하세요';
console.log(m + o);
