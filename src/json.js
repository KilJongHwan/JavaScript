const memberInfo = [
    {
        name: "jessy",
        age: 22,
        job: "worker",
        addr: "Los Angeles"
    },
    {
        name: "kane",
        age: 25,
        job: "Actor",
        addr: "Newyork"
    },
    {
        name: "james",
        age: 21,
        job: "student",
        addr: "Newyork"
    },
];
// 자바스크립트 객체를 JSON 문자열로 변환
const json = JSON.stringify(memberInfo);
console.log(json);

// JSON 문자열을 자바스크립트 객체로 변환
const jsobject = JSON.parse(json);
console.log(jsobject);