let a = "hello"; //a가 string 이라는 것을 바로 알 수 있음
a = "bye"; // 문자형 -> 문자형
// a = 1 // 문자형을 숫자형으로 바꾸려 할 때 에러
// let b = false; // 불린형태
let b: boolean = false; // 변수의 형태를 알려주는 법

let c: number[] = []; // 숫자형 배열

const playererer = {
  name: "nico",
};

// playererer.name = 1 //문자 -> 숫자 에러
// playererer.hello() // hello가 존재하지 않음

// let a: number[] = [1];
// let b: string[] = ["li", "il"];
// let c: boolean[] = [true]; //종류별로 array 만들기

const playerNico: {
  name: string;
  age?: number;
} = {
  name: "nico",
}; //객체의 타입 알려주기 / 타입선언할 때 ?를 붙이면 있을수도 없을수도 있다

type Name = string;
type Age = number;
type Player = {
  readonly name: Name; //수정불가
  age?: Age;
}; // 타입의 타입을 생성하고 타입의 타입을 받아옴

const playerLymm: Player = {
  name: "lynn",
  age: 12,
}; //타입을 알려주는걸 변수로 설정 후 받아오기

function playerMaker(name: string): Player {
  //타입 리턴하기
  return {
    name,
  };
}

const nico = playerMaker("nico");
nico.age = 12;

const names: readonly string[] = ["1", "2"];

const playertktms: readonly [string, number, boolean] = ["nico", 1, true]; //정해진 갯수의 요소와 순서를 맞춰야됨
// playertktms[0]=1 // 문자형이 아니기 때문에 에러
// playertktms[0] = "dd" // 리드온리를 넣어서 수정불가

let adlsemt: undefined = undefined;
let bdlsemt: null = null; // 또다른 형태들

let anygudxo = []; // 비어있을 때 기본 any형태

const anya: any = [1, 2, 3, 4];
const anyb: any = true;
anya + anyb; // js형식으로 바뀌어서 에러가 안나옴

let unka: unknown;
//let asas = unka + 1 //ts가 보호아래 에러발생

function hello(): never {
  throw new Error("xxx");
} //return하지않고 Error을 발생

function hellot(nammme: string | number) {
  if (typeof nammme == "string") {
    nammme;
  } else if (typeof nammme == "number") {
    nammme;
  } else {
    nammme;
  }
} //각각의 타입으로 반환

type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number; //b는 문자가 될 수도 숫자가 될 수도
}; //signature
// const add: Add = (a, b) => a + b; //function만드는법(동일한 속성일 때)
const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
}; //b가 숫자일때만

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};
const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};

// type SuperPrint = {
//   <t>(arr: t[]): void; // 모든 형태를 받을 수 있다/ 타입스크립트 본인이 찾아옴
// };

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => console.log(i));
// };

function superPrint<T>(a: T[]) {
  return a[0];
}

// type SuperPrint = <T, M>(a: T[], b: M) => T;// 두개가 아닐경우 에러
// const superPrint: SuperPrint = (a) => a[0];

const tspa = superPrint([1, 2, 3, 4]);
const tspb = superPrint([true, false]);
const tspc = superPrint(["a", "ab", "c"]);
const tspd = superPrint([1, 2, , true, false, "hello"]);

abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    public nickname: string
  ) {} // private:사용불가/protected 상속받으면사용가능/public 모두사용
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class playerr extends User {
  //상속받아서 사용
  getNickName() {
    console.log(this.nickname);
  }
}

const nigo = new playerr("ni", "co", "니코");
nigo.getFullName();
nigo.nickname; //public 가져오기

type Words = {
  [key: string]: string; //key:string만을 가지는 오브젝트
};

let dict: Words = {
  potato: "food",
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {}; //초기화
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  } //term을 사용해 word를 찾는 메소드
}
class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의음식"); //만들고
const bict = new Dict();
bict.add(kimchi); //넣기
bict.def("kimchi"); //찾기

// type PP = {
//   nickN: string;
//   health: number;
// };
// const nicu: PP = {
//   nickN: "nicu",
//   health: 10,
// };
// type Food = string;
// const kimuchi: Food = "delicious";
// //타입 불러내기 반복

type Team = "read" | "blue" | "yellow"; //지정된 값만 사용가능
type Heal = 1 | 5 | 10; //지정된 값만 사용가능
interface TP {
  //ts에게 object의 모양을 설명해주는 역할
  nm: string;
  team: Team;
  heal: Heal;
}
const ddong: TP = {
  nm: "dong",
  team: "blue",
  heal: 1,
}; //만든거 가져오기

interface UU {
  nn: string;
}
interface PP extends UU {}
const ncnc: PP = {
  nn: "nico",
};

interface dk {
  name: string;
}
interface dk {
  lana: string;
}
interface dk {
  nala: number;
}
const dksl: dk = {
  name: "nc",
  lana: "n",
  nala: 10,
}; //합칠 수 있다

/* abstract class ser {
  constructor(protected irstName: string, protected astName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
//as
class yer extends ser {
  fullName() {
    return `${this.irstName} ${this.astName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. im ${this.fullName}`;
  }
} //추상클래스 또 사용해보기
*/

interface ser {
  irtName: string;
  astName: string;
  sayHi(name: string): string;
  fullName(): string;
}
class Ani implements ser {
  constructor(public irtName: string, public astName: string) {}
  fullName() {
    return `${this.irtName} ${this.astName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. im ${this.fullName}`;
  }
} //추상클래스 대신 인터페이스 사용해보기

type PlayerA = {
  name: string;
};
const playerA: PlayerA = {
  name: "nico",
};
interface PlayerB {
  name: string;
}
const playerB: PlayerB = {
  name: "nico",
}; //type interface 둘 다써보기

////
////
interface SStorage<T> {
  [key: string]: T;
}

class Localstorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
const stringStorage = new Localstorage<string>();
stringStorage.get("ket");
stringStorage.set("hello", "how are you");

const booleanStorage = new Localstorage<string>();
booleanStorage.get("xxx");
booleanStorage.set("hello", true);
