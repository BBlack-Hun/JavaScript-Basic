/**
 * 반복문4 (break & continue)
 */

// 해당 조건을 스킵함 (continue)
for (let i = 0; i < 10; i++) {
  if (i === 2) continue;
  console.log(i);
}

// 반복문을 종료함 (break)
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i);
}
