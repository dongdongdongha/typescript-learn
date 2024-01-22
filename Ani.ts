class Ani implements ser {
  constructor(private irtName: string, private astName: string) {}
  fullName() {
    return `${this.irtName} ${this.astName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. im ${this.fullName}`;
  }
} //추상클래스 대신 인터페이스 사용해보기
