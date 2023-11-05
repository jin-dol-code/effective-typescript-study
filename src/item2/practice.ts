/**
 * noImplicitAny
 *
 * 매개변수에는 암시적으로 'any' 타입이 추론된다
 */

function add(a: any, b: any) {
  return a + b;
}

/**
 * strictNullChecks
 *
 * 'null' 형식은 'number' 형식에 할당할 수 없으나 해당 옵션 해제시 가능하다
 */
const x: number | null = null;
