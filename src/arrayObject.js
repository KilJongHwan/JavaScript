// Array 객체 : 배열에서 사용할 수 있는 많은 속성과 메소드가 정의 되어 있음
const arr = [10, 20, 30, 40, 50, 60];
// 배열의 요소를 자동순회하는 비파괴 메소드
arr.forEach(e => {
    console.log(e*e);
});
// toString()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
// join() : 배열안의 모든 문자를 지정한 문자를 이용해서 연결
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.join(" * ")); // Banana * Orange * Apple * Mango
// pop() : 스택 자료 구조의 특성, 배열의 맨마지막 데이터를 제거하고 결과를 반환
console.log(fruits.pop());
fruits.push("Kiwi");
console.log(fruits);
fruits.shift(); // 첫번째 요소를 제거하고, 첫 번째 요소를 반환
console.log(fruits);
fruits.unshift("Lemon"); // 맨 앞에 요소를 추가하고, 배열의 길이를 반환
console.log(fruits);
fruits[0] = "Banana"; // 배열의 인덱스로 접근해 배열의 요소 값 변경
console.log(fruits);

// concat() : 2개 이상의 배열을 하나의 배열로 결합
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);

// slice() : 2개의 파라미터를 사용해 배열의 요소를 잘라내기 (비파괴적 메소드)
let fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits3.slice(3); // [Apple, Mango]
let citrus2 = fruits3.slice(1,3); // [Orange, Lemon]
console.log(citrus);
console.log(citrus2);

let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.sort(); 
console.log(fruits4);
fruits4.reverse();
console.log(fruits4);

// filter() : 배열에서 특정 조건을 만족하는 배열의 요소만 찾아서 새로운 배열을 반환
let persons = [
    {
      name: "유재석",
      point: 78,
      city: "서울",
    },
    {
      name: "김종국",
      point: 92,
      city: "서울",
    },
    {
      name: "양세찬",
      point: 76,
      city: "제주",
    },
    {
      name: "하하",
      point: 81,
      city: "서울",
    },
  ];

  const pass = persons.filter(persons => persons.point > 80);
  console.log(pass);
  const local = persons.filter(persons => persons.city === "제주");
  console.log(local);

  // map() 메소드 : 배열의 각요소를 변환하고, 그 결과를 새로운 배열로 반환하는 메소드 (리액트에서 가장 많이 사용함)
const numbers = [1,2,3,4,5,6,7,8,9,10];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);