// 성적을 입력받아 학점 출력하기
// - 0 ~ 100점 사이가 아니면 입력 오류 출력
// - 90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F 처리
let grade;
 while (true) {
     grade = Number(prompt("성적을 입력하세요", ""));
     if (grade < 0 || grade > 100) alert("입력 오류");
     else break;
 }

 let gradeText;
 if (grade >= 90) {
     gradeText = "A";
 } else if (grade >= 80) {
     gradeText = "B";
 } else if (grade >= 70) {
     gradeText = "C";
 } else if (grade >= 60) {
     gradeText = "D";
 } else {
     gradeText = "F";
 }

 // 학점을 화면에 출력하고 해당 ID를 부여
 let gradeElement = document.createElement("div");
 gradeElement.className = "grade";
 gradeElement.id = gradeText;
 gradeElement.textContent = gradeText;
 document.body.appendChild(gradeElement);