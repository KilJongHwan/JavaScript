const date = new Date();
const complete = new Date("2024-02-21");

let remainTime = complete.getTime() - date.getTime();
console.log(remainTime);
const calcDay = Math.round(remainTime / (1000*60*60*24));
console.log(calcDay);

const resultElement = document.getElementById('result');
resultElement.innerHTML = `<span class="large-text">학원수료</span><span class="red-text">${calcDay} 일</span> 남았습니다.`;