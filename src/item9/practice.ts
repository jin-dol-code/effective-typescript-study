interface Person {
  name: string;
}

const people1 = ["alice", "bob", "jan"].map((name) => ({ name } as Person)); // 타입은 Person[]

const people2 = ["alice", "bob", "jan"].map((name): Person => ({ name })); // 타입은 Person[]
