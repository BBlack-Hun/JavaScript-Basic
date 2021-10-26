/**
 * Getter & Setter
 */

const numbers = {
  a: 1,
  b: 2,
  // getter의 선언
  get sum() {
    console.log(`sum 함수가 실행됩니다.`);
    return this.a + this.b;
  },
};

// numbers.a = 5;
// console.log(numbers);

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

const dog = {
  _name: '멍멍이',
  // setter의 선언
  get name() {
    console.log(`_name을 조회합니다.`);
    return this._name;
  },
  set name(value) {
    console.log('이름이 바뀝니다...' + value);
    this._name = value;
  },
};

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog._name);

console.log('=====================================');

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  },
};

console.log(numbers2.sum);
numbers2.a = 5;
numbers2.b = 7;
numbers2.a = 9;
console.log(numbers2.sum);
