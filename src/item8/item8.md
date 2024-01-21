# 타입 공간과 값 공간의 심벌 구분하기

> 타입스크립트의 심벌은 타입 공간이나 값 공간 중의 한 곳에 존재한다

> ex) interface 와 같이 타입 선언문으로 심벌을 정의한 경우 타입으로서 사용된다 하지만 const 와 같이 변수 선언문 사용시 값으로서 사용된다

- 타입인 심벌: as, : 뒤에 나오는 심벌
- 값인 심벌: = 다음에 오는 심벌

```typescript
interface Cylinder {
  radius: number;
  height: number;
}

const Cylinder = (radius: number, height: number) => ({ radius, height });

function calculateVolume(shape: unknown) {
  // instanceof 연산자는 런타임 연산자 이므로 값에 대해 연산한다 > 즉 함수를 참조한다
  if (shape instanceof Cylinder) {
    shape.radius;
    // ~~~~~~ '{}' 형식에 'radius' 속성이 없습니다.
  }
}

// 클래스로서 선언한 경우에는 식별자의 중복을 감지한다
// 클래스는 런타임 시에도 살아있기 때문에
class Cylinder1 {
  radius: number;
  height: number;
  constructor(r: number, h: number) {
    this.radius = r;
    this.height = h;
  }
}

const Cylinder1 = (radius: number, height: number) => ({ radius, height });
```

## 관점에 따른 typeof 연산자

### 타입의 관점

typeof는 값을 읽어서 타입스크립트 타입을 반환한다
type 구문으로 이름을 붙이는 용도로도 사용할 수 있다

### 값의 관점

typeof는 자바스크립트 런타임의 typeof 연산자가 된다

```typescript
const v = typeof Cylinder; // 값이 "function"
type T = typeof Cylinder; // 타입이 typeof Cylinder
```

## 관점에 따라 다른 코드 패턴들

- this

  - 값으로 쓰이는 this는 자바스크립트의 this 키워드이다
  - 타입으로 쓰이는 this는 일명 ‘다형성(polymorphic) this’라고 불리는 this의 타입스크립트 타입이다
  - 서브클래스의 메서드 체인을 구현할 때 유용하다

- &, |

  - 값에서 &와 |는 AND와 OR 비트연산이다
  - 타입에서는 인터섹션과 유니온 입니다.

- const

  - const는 새 변수를 선언 한다
  - as const는 리터럴 또는 리터럴 표현식의 추론된 타입을 바꾼다

- extends

  - extends 는 서브 클래스(class A extends B)또는 서브타입(interface A ex tends B) 또는 제너릭 타입의 한정자(Generic<T extends number>)를 정의 할 수 있다

- in
  - in 은 루프(for (key in object))또는 매핑된(mapped)타입에 등장한다

## 이해 안되는 부분

속성 접근자인 []는 타입으로 쓰일 때에도 동일하게 동작합니다. 그러나 obj \['field']와 obj.field는 값이 동일하더라도 타입은 다를 수 있습니다.
