/**
 * 반복문2
 */

// while문에서는 변수를 미리 선언해준다.
let i = 0;

// 괄호 안의 조건을 무조건 끝날 수 있도록 해줘야 한다.
while (i < 10) {
  console.log(i);

  i++;
}

// while문을 쓸때는 어떤 조건을 만족할때 true 혹은 false가 되도록하는 조건을 넣어서 쓰는 편이다.
let isFun = false;

while (isFun === false) {
  console.log(i);
  i++;
  if (i === 30) {
    isFun = true;
  }
}
