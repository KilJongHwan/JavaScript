const applicant = Number(prompt("응모한사람의 숫자 입력", ""));

const winner = Math.floor(Math.random() * applicant + 1);

document.write(`전체 <h1>${applicant}</h1> 중 당첨된 번호 <h1>${winner}<h1>`);