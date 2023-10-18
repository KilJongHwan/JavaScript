
const date = new Date;
let jumin;

while(true) {
    jumin = prompt("주민번호를 입력하세요(- 입력)");
    if(jumin.indexOf("-") === -1 && jumin.length !== 14) alert("주민번호 형식이 틀렸습니다. 다시 입력해주세요");
    else break;
}

const juminYear = parseInt(jumin.slice(0, 2));
const currentYear = date.getFullYear();
let age;

if (currentYear - juminYear >= 2000){
    age = (currentYear - juminYear) - 2000;
}
else{
    age = (currentYear - juminYear) - 1900;
}

let gender = jumin.charAt(7);

if(gender === "1" || gender === "3") gender = "male";
else if(gender === "2" || gender === "4") gender = "female";
else gender = "NO GENDER INFO.";

document.getElementById("result").innerHTML = `나이: ${age} <br> 성별: ${gender}`;