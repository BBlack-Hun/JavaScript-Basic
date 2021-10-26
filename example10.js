/**
 * 객체3
 */

const dog = {
  name: '댕댕이',
  sound: '멍멍',
  say: function () {
    console.log(this.sound); // 자신이 속해져 있는 객체를 가르킨다. 그러나 화살표함수에서는 작동 x
  },
};

dog.say();

const cat = {
  name: '야옹이',
  sound: '야옹~',
};

cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say();
catSay();
