/**
 * 객체2
 */

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
};

const print = (hero) => {
  const { alias, name, actor } = hero; // 비구조 할당 -> 파라미터에서도 가능함... hero 대신 {alias, name, actor}
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
};

print(ironMan);
