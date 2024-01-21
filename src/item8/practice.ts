// interface Cylinder {
//   radius: number;
//   height: number;
// }

// const Cylinder = (radius: number, height: number) => ({ radius, height });

// function calculateVolume(shape: unknown) {
//   // instanceof 연산자는 런타임 연산자 이므로 값에 대해 연산한다 > 즉 함수를 참조한다
//   if (shape instanceof Cylinder) {
//     shape.radius;
//     // ~~~~~~ '{}' 형식에 'radius' 속성이 없습니다.
//   }
// }

// // 클래스로서 선언한 경우에는 식별자의 중복을 감지한다
// // 클래스는 런타임 시에도 살아있기 때문에
class Cylinder {
  radius: number;
  height: number;
  constructor(r: number, h: number) {
    this.radius = r;
    this.height = h;
  }
}

// const Cylinder1 = (radius: number, height: number) => ({ radius, height });

const v = typeof Cylinder; // 값이 "function"
type T = typeof Cylinder; // 타입이 typeof Cylinder

// ReferenceError: fn is not defined ? 예제대로 했는데 안된다
declare let fn: T;

const a = new fn(1, 1);

console.log(typeof a);

type Tuple = [string, number, Date];
type TupleEl = Tuple[0]; // 타입은 string | number | Date
interface Person1 {
  first: string;
  last: string;
}
type PersonEl = Person1["first" | "last"]; // 타입은 string
