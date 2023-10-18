// 객체란? 자바스크립트에서 원시타입을 제외한 모든 값이 객체
// 속성과 값의 쌍으로 구성
// 객체는 객체리터럴을 사용하여 만들며, 속성(property)과 값(value)의 쌍으로 구성
// 자바스크립트에서 객체를 만드는 방법은 객체리터럴을 사용하는 방법과 클래스를 사용하는 방법이 있다.
// 객체리터럴로 객체를 만드는 것이 간단하고 직관적이다.
const person = {
    title : "Game",
    name : "james",
    age : 21,
    job : "worker"
};

console.log(person);

const person2 = {
    name: {
        firstName: "james",
        lastName: "john"
    },
    age: 21,
    isAdult: true,
    info: function(){
        return `NAME : ${this.name.lastName}${this.name.firstName}
        AGE : ${this.age} `;
    }
}
console.log(person2.info());
console.log(person2["name"]);

// 객체 속성 변경하기
person2.name.firstName = "kane";
person2.name.lastName = "brown";
console.log(person2.info());
// 객체 속성 동적으로 추가하기
const carInfo = {};
carInfo.name = "GenesisGV80kupe";
carInfo.year = "2023/10/18";
carInfo.maxSpeed = "235km";
console.log(carInfo);
// 객체리터럴 동적으로 삭제하기
delete carInfo.year;
console.log(carInfo);
// 객체 메소드 : 객체 내부에서 동작하는 함수,즉 프로퍼티에 저장된 값의 타입이 함수를 의미
let person3 = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
};
person3.sayHello(); // 출력: 'Hello, my name is John.'
// 생성자로 객체 생성하기, 함수 이름이지만 객체를 생성하기 위해서 사용하기 때문에 첫자가 대문자
function Person(name, age, addr, job) {
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.job = job;
}
const person11 = new Person("jessy",22, "Los angeles", "worker");
const person22 = new Person("amy",22, "Los angeles", "worker");
console.log(person11);
console.log(person22);
