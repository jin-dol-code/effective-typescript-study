/**
 * 다음 코드는 TS의 Interface를 정의 하여 타입 체커를 활성화한 코드이다
 * 존재하지 않는 프로퍼티에 대해 오류를 발생시키고 인터페이스를 통해 개발자의 의도를 명확히 했다
 */

interface State {
  name: string;
  capital: string;
}
const states: State[] = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneau" },
  { name: "Arizona", capital: "Phoenix" },
];

for (const state of states) {
  console.log(state.capital);
}

/**
 * 출력
 * Montgomery
 * Juneau
 * Phoenix
 */
