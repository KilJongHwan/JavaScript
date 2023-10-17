// 변수와 상수 : var, let const
// var : es6 이전에 사용하던 변수 생성 문법 (호이스팅 특징을 가지고 있음), 중복 선언 가능 , 재할당 가능
// let : 변수 선언 문법, 자바의 변수의 형태와 동일, 중복 선언 불가, 재할당 가능, es6에서 추가
// const : 상수 선언, 재할당 불가, es6에서 추가

console.log(sum(10,20));
function sum(x, y) {
    return x + y;
}