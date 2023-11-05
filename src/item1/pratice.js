/**
 * 다음 코드에는 js 문법적 오류가 존재하지 않는다
 * 하지만 배열 내 객체들에는 capitol 프로퍼티가 존재하지 앟고 이는 개발자의 의도와 다를 가능성이 높다
 */

const states = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneau" },
  { name: "Arizona", capital: "Phoenix" },
  // ...
];
for (const state of states) {
  console.log(state.capitol);
}
/**
 * 출력
 * undefined
 * undefined
 * undefined
 */
